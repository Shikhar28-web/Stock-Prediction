

Stock Market Price Prediction Website 

This project is a Stock Market Prediction Web App that utilizes deep learning to forecast future stock prices based on historical data. The application is built with Streamlit for backend prediction and also includes a separate HTML frontend interface.

Features

Predicts future stock prices using a trained deep learning model

Visualizes important stock indicators and moving averages

Interactive UI for stock selection and time-range customization

Graphical comparison of actual vs. predicted stock prices


Technologies & Libraries Used

NumPy: For efficient numerical computations and array processing for model input.

Pandas: Handles data manipulation and time-series operations for stock data.

Yahoo Finance (yfinance): Fetches historical stock market data from 2012 to 2022.

TensorFlow / Keras: Deep learning framework used to train and run LSTM models for stock price prediction.

Scikit-Learn: Uses MinMaxScaler for data normalization to improve model training.

Matplotlib: Creates professional plots and graphs for data and prediction visualization.

Streamlit: Builds the interactive back-end to display results and receive user input.


Data Range

Start Date: January 1, 2012

End Date: December 31, 2022


Visualizations Provided

1. Price vs MA50


2. Price vs MA100 vs MA200


3. Price vs MA50 vs MA100


4. Original Price vs Predicted Price

Green Line: Actual stock prices (y)

Red Line: Predicted stock prices (predict)




The model uses past stock price patterns to make predictions. Predicted values are scaled back to the original range and plotted to show accuracy.

Getting Started

1. Clone the Repository:

git clone https://github.com/Shikhar28-web/Stock-Prediction


2. Install Dependencies:

pip install tensorflow
pip install yfinance
pip install streamlit


3. Run the Backend App in the terminal :

streamlit run app.py


4. Run the Frontend:

Open the tech virus.html file in your web browser to access the frontend UI.



