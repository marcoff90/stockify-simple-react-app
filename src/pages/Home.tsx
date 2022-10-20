import React, {useMemo, useReducer, useState} from "react";
import {Box, Button, Grid, Typography} from "@mui/material";
import LineChartWrapper from "../components/LineChart";
import InfoBox from "../components/InfoBox";
import RangeDatePicker from "../components/DatePicker";
import {Range} from "react-date-range";
import generateStockData from "../helpers/generate-stock-data";
import {IStockData} from "../interfaces/stock-data";
import {grey} from "@mui/material/colors";
import AppLoader from "../components/AppLoader";
import getDatesDifference from "../helpers/date-difference";
import {useErrorSnackbar} from "../hooks/useErrorSnackbar";
import calculateStock from "../helpers/stockify-calculation";
import {ICalculationResult} from "../interfaces/calculation-result";

const Home: React.FC = () => {
  const [dateRange, setDateRange] = useState<Range[]>([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
    color: '#00adb5'
  }]);

  const [chartData, setChartData] = useState<IStockData[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [stockCalculation, setStockCalculation] = useState<ICalculationResult | null>(null);

  const range = structuredClone(dateRange[0]);
  const startDate = dateRange[0].startDate!;
  const endDate = dateRange[0].endDate!;

  const stockData = useMemo(() => {
    return generateStockData(range);
  }, [dateRange[0]]);

  const {enqueueErrorSnackbar} = useErrorSnackbar();

  const validateInterval = (startDate: Date, endDate: Date): boolean => {
    const dayDiff = getDatesDifference(startDate, endDate)
    if (dayDiff > 14) {
      enqueueErrorSnackbar('The dates interval can not be greater than 14 days');
      return false;
    }
    if (dayDiff === 0) {
      enqueueErrorSnackbar('Select at least two dates to get the results');
      return false;
    }
    return true;
  };

  const submitHandler = () => {
    if (validateInterval(startDate, endDate)) {
      setSubmitted(true);
      setLoading(true);
      setStockCalculation(calculateStock(stockData));
      setChartData(stockData);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }

  return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={3.5} sx={{backgroundColor: '#00adb5'}}>
          <Box my={5} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
            <Typography color={'white'}
                        fontWeight={600}
                        mb={5}
                        sx={{
                          width: '60%',
                          textAlign: 'center'
                        }}>Start by selecting dates to see the optimal calculation</Typography>
            <RangeDatePicker range={dateRange} setRange={setDateRange}/>
            <Button sx={{marginTop: '1rem'}}
                    variant={'contained'}
                    color={'secondary'}
                    onClick={submitHandler}>Submit</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={8.5}>

          {!submitted ?

              <Grid item xs={12}>
                <Box mt={20}
                     sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Typography variant={'h3'} color={grey[700]} fontWeight={600}>Welcome to Stockify</Typography>
                  <Typography mt={10} color={grey[700]} fontWeight={600} sx={{width: '80%', textAlign: 'center'}}>
                    Stockify is a favourite tool which helps it's users who wants to get into stock market!
                    Simply select the date interval in the calendar on the left, submit your selection and Stockify
                    algorithm will find you the perfect day to buy and sell the stock to help you get the highest
                    possible profit!
                    So what are you waiting for?
                  </Typography>
                </Box>
              </Grid>

              :

              loading ? <AppLoader/> :

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6.5} sx={{justifyContent: 'center'}}>
                      <Box mt={5} sx={{width: '95%', height: '30rem'}}>
                        <LineChartWrapper chartData={chartData}/>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5.5}>
                      <Grid container mt={5} sx={{justifyContent: 'center', height: '90%'}}>
                        {stockCalculation ?
                            <>
                              <InfoBox topText={`Buy on: ${stockCalculation.buyOnDay}`}
                                       bottomText={`Price: ${stockCalculation.buyingPrice}`}
                                       backgroundColor={'#0081a7'}
                                       textColor={'white'}/>
                              <InfoBox topText={`Sell on: ${stockCalculation.sellOnDay}`}
                                       bottomText={`Price: ${stockCalculation.sellingPrice}`}
                                       textColor={'white'}
                              />
                              <InfoBox topText={'Profit'}
                                       bottomText={`${stockCalculation.profit}$`}
                                       backgroundColor={'#fdfcdc'}/>
                            </>
                            :
                            <InfoBox topText={'Sorry'}
                                     backgroundColor={'#f07167'}
                                     textColor={'white'}
                                     bottomText={'no profit for you :('}/>
                        }

                      </Grid>
                    </Grid>
                  </Grid>
          }
        </Grid>
      </Grid>
  );
};

export default Home;
