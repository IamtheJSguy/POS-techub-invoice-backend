module.exports = function(data, configuration) {
    let html = ''
    html += `
    <!DOCTYPE html>
<<<<<<< HEAD
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>
    <style>
        .fx-con {
            display: -webkit-box !important;
            width: 100% !important;
            /* flex-wrap: wrap; */
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            flex: 1;
        }
            *{
                font-family : Arial ;
            }
        .main-con {
            padding: 10px 20px !important;
        }

        .table {
            margin-top: 28px;
            border-spacing: 0;
        }

        .table td {
            width: 25%;
            border: none;
            text-align: right;
            padding: 2px 5px;
            height: 28px;
        }

        .invoice-table td {
            width: unset;
            border: 0.001rem solid rgba(0, 0, 0, 0.16);
        }

        .invoice-table thead td {
            text-align: center;
            width: 12.5% !important;
        }

        .amenities-table td {
            text-align: center;
            color: #ffffff;
            font-weight: 500;
            font-size: 12px;
            width: 12.5% !important;
            border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .table th {
            height: 28px;
        }

        .table th {
            background-color: #000001;
            color: yellow;
        }

        .cell-bg-1 {
            background-color: #434343;
            color: yellow;
            font-weight: 700;
        }

        .cell-bg-2 {
            background-color: #c0c0c0;
            color: #000000;
            font-weight: 700;
        }

        .cell-bg-3 {
            background-color: #666666;
            color: #000000;
            font-weight: 700;
        }

        .cell-bg-4 {
            background-color: #ececec;
            color: #000000;
            font-weight: 700;
        }

        .cell-bg-5 {
            background-color: #ffffff;
            color: #000000;
        }

        .footer {
            font-weight: 500;
            font-size: 12px;
        }

        .footer {
            font-weight: 500;
            font-size: 12px;
        }

        .cell {
            font-size: 11px;
            padding: 2px;
            min-height: 18px;
        }

        .cell p {
            margin: 0;
            text-overflow: ellipsis;
        }

        .cell-11 {
            width: 10.65% !important;
            text-align: center;
            overflow: hidden;
        }
        .cell-12{
            width: 8.65% !important;
            text-align: center;
            overflow: hidden;
        }

        .cell-22 {
            text-align: center;
            width: 21.3% !important;
            overflow: hidden;
        }

        .cell-25 {
            width: 24.5% !important;
        }

        .cell-45 {
            width: 44.5% !important;
        }

        .cell-55 {
            width: 54.5% !important;
        }

        .full-cell {
            width: 99.8%;
        }

        .info-con {
            width: 100%;
            border: 2px solid #F1BC1C;
        }

        .invoice-con {
            margin-top: 20px;
            width: 100% !important;
            border: 2px solid #F1BC1C;
        }

        .transaction-con {
            margin-top: 20px;
            width: 100% !important;
            border: 2px solid #F1BC1C;
        }

        .text-transparent {
            color: transparent;
        }

        .main-heading {
            font-weight: 700;
            text-align: center;
            font-size: 14px;
        }

        .sub-heading {
            font-weight: 700;
        }

        .bg-1 {
            background-color: #222222;
        }

        .bg-2 {
            background-color: #434343;
            color: #fff;
        }

        .bg-3 {
            background-color: #DDDDDD;
            color: #000;
        }

        .bg-4 {
            background-color: #666666;
        }

        .bg-5 {
            background-color: #EEEEEE;
        }

        .color-yellow {
            color: #F1BC1C;
            font-weight: 700;
            font-size: 14px;
        }

        .invoice-con .cell-11,
        .invoice-con .cell-22 {
            border-left: 1px solid #CCC !important;
            border-bottom: 1px solid #CCC !important;
        }
        .transaction-con .cell-11 {
            width: 10.5% !important;
            text-align: center;
            overflow: hidden;
        }
        .transaction-con .cell-12 {
            width: 9.5% !important;
            text-align: center;
            overflow: hidden;
        }
        .invoice-con .cell-12,
        .invoice-con .cell-22 {
            border-left: 1px solid #CCC !important;
            border-bottom: 1px solid #CCC !important;
        }

        .transaction-con .cell-12,
        .transaction-con .cell-22,
        .transaction-con .cell-45,
        .transaction-con .cell-55,
        .transaction-con .full-cell {
            border-left: 2px solid #CCC !important;
            border-bottom: 2px solid #CCC !important;
            
        }

        .transaction-con .cell-11,
        .transaction-con .cell-22,
        .transaction-con .cell-45,
        .transaction-con .cell-55,
        .transaction-con .full-cell {
            border-left: 2px solid #CCC !important;
            border-bottom: 2px solid #CCC !important;
            
        }
        

        .no-border {
            border: none !important;
        }

        .border-top-yellow {
            border-top: 1px solid #F1BC1C !important;
        }

        .border-bottom-yellow {
            border-bottom: 1px solid #F1BC1C !important;
        }

        .border-left-yellow {
            border-left: 1px solid #F1BC1C !important;
        }

        .border-right-yellow {
            border-right: 1px solid #F1BC1C !important;
        }
        .t-a-r {
            text-align: right;
            font-size: 13px;
        }
    </style>
</head>

<body>
    <div class="main-con">
        <div class="" align="right">
            <img src="images/logo-techhub.svg" alt="" height="80px" />
        </div>
        <div class="info-con">
            <div class="full-cell cell bg-1">
                <p class="main-heading color-yellow">INFORMATION</p>
=======
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>
        <style>
            .fx-con {
        display: flex;
    }
    * {
        font-size: 10px;
    }
    .main-con {
        padding: 10px 20px;
    }
    .table {
        margin-top: 28px;
        border-spacing: 0;
    }
    .table td {
        width: 25%;
        border: none;
        text-align: right;
        padding: 2px 5px;
        height: 18px;
    }
    .invoice-table td {
        width: unset;
        border: 0.001rem solid rgba(0, 0, 0, 0.16);
    }
    .invoice-table thead td {
        text-align: center;
        width: 12.5% !important;
    }
    .amenities-table td {
        text-align: center;
        color: #ffffff !important;
        font-weight: 500;
        font-size: 12px;
        width: 12.5% !important;
        border: 1px solid rgba(255, 255, 255, 0.16);
    }
    .table th {
        height: 18px;
    }
    .table th {
        background-color: #000001;
        color: yellow;
    }
    .cell-bg-1 {
        background-color: #3b3b3b;
        color: yellow;
        font-weight: 700;
    }
    .cell-bg-2 {
        background-color: #c0c0c0;
        color: #000000;
        font-weight: 700;
    }
    .cell-bg-3 {
        background-color: #a1a1a1;
        color: #000000;
        font-weight: 700;
    }
    .cell-bg-4 {
        background-color: #ececec;
        color: #000000;
        font-weight: 700;
    }
    .cell-bg-5 {
        background-color: #ffffff;
        color: #000000;
    }
    .footer {
        font-weight: 500;
        font-size: 12px;
    }
        </style>
    </head>
    <body>
        <div class="main-con">
            <div class="" align="right">
              <img src="https://techub.com.pk/wp-content/uploads/2021/04/logo-techhub.svg" alt="" height="60px" />
>>>>>>> 81bc7d0e61bfaf5077a99409f907d7eb1030546f
            </div>
            <div class="fx-con">
                <div class="cell cell-25 bg-2 color-yellow">
                    <p class="t-a-r">
                        Contact Person Name
                    </p>
                </div>
                <div class="cell cell-25 bg-3">
                    <p>
                        ${data.user.name}
                    </p>
                </div>
                <div class="cell cell-25 bg-2 color-yellow">
                    <p class="t-a-r">
                        Company Name
                    </p>
                </div>
                <div class="cell cell-25 bg-3">
                    <p>
                        ${data.user.companyName}
                    </p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-25 bg-4">
                    <p class="text-transparent">
                        alias
                    </p>
                </div>
                <div class="cell cell-25 bg-5">
                    <p class="text-transparent">
                        alias
                    </p>
                </div>
                <div class="cell cell-25 bg-4 color-yellow">
                    <p class="t-a-r">
                        Business Activity
                    </p>
                </div>
                <div class="cell cell-25 bg-5">
                    <p>
                        ${data.user.businessActivity}
                    </p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-25 bg-2 color-yellow">
                    <p class="t-a-r">
                        Contact Number
                    </p>
                </div>
                <div class="cell cell-25 bg-3">
                    <p>
                        ${data.user.phoneNumber}
                    </p>
                </div>
                <div class="cell cell-25 bg-2 color-yellow">
                    <p class="t-a-r">
                        Email
                    </p>
                </div>
                <div class="cell cell-25 bg-3">
                    <p>
                        ${data.user.email}
                    </p>
                </div>
            </div>
        </div>
        <div class="invoice-con">
            <div class="full-cell cell bg-1">
                <p class="main-heading color-yellow">INVOICE</p>
            </div>
            <div class="fx-con">
                <div class="cell cell-22 bg-2 no-border" style="border-left: none; marin-right: 0.5rem;">
                    <p class="sub-heading color-yellow">Item</p>
                </div>
                <div class="cell cell-11 bg-2 no-border">
                    <p class="sub-heading color-yellow">Room No</p>
                </div>
                <div class="cell cell-11 bg-2 no-border">
                    <p class="sub-heading color-yellow">Shift</p>
                </div>
                <div class="cell cell-11 bg-2 no-border">
                    <p class="sub-heading color-yellow">Seats</p>
                </div>
                <div class="cell cell-11 bg-2 no-border">
                    <p class="sub-heading color-yellow">Base Rate</p>
                </div>
                <div class="cell cell-11 bg-2 no-border">
                    <p class="sub-heading color-yellow">Discount %</p>
                </div>
                <div class="cell cell-22 bg-2 no-border">
                    <p class="sub-heading color-yellow">Amount</p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-22 bg-3">
                    <p>${data.booking.type}</p>
                </div>
                <div class="cell cell-11 bg-3">
                    <p>${data.booking.roomNumber}</p>
                </div>
                <div class="cell cell-11 bg-3">
                    <p>${data.booking.shift}</p>
                </div>
                <div class="cell cell-11 bg-3">
                    <p>${data.booking.seats}</p>
                </div>
                <div class="cell cell-11 bg-3">
                    <p>${data.booking.baseRate}</p>
                </div>
                <div class="cell cell-11 bg-3">
                    <p>${data.booking.discount}</p>
                </div>
                <div class="cell cell-22 bg-3">
                    <p>${data.netTotal}</p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
            </div>
            <div class="fx-con">
                <div class="no-border cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-2 no-border border-top-yellow border-left-yellow">
                    <p class="t-a-r sub-heading color-yellow">Total</p>
                </div>
                <div class="cell cell-22 bg-3 no-border border-top-yellow border-right-yellow">
                    <p>${data.booking.total}</p>
                </div>
            </div>
            <div class="fx-con">
                <div class="no-border cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-4 no-border border-left-yellow">
                    <p class="t-a-r sub-heading color-yellow">Security Amount</p>
                </div>
                <div class="cell cell-22 bg-5 no-border border-right-yellow">
                    <p>0</p>
                </div>
            </div>
            <div class="fx-con">
                <div class="no-border cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-2 no-border border-left-yellow">
                    <p class="t-a-r sub-heading color-yellow">Arrears</p>
                </div>
                <div class="cell cell-22 bg-3 no-border border-right-yellow">
                    <p>${data.arrears || 0}</p>
                </div>
            </div>
            <div class="fx-con">
                <div class="no-border cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-4 no-border border-left-yellow">
                    <p class="t-a-r sub-heading color-yellow">Tax</p>
                </div>
                <div class="cell cell-22 bg-5 no-border border-right-yellow">
                    <p>0</p>
                </div>
            </div>
            <div class="fx-con">
                <div class="no-border cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-2 no-border border-bottom-yellow border-left-yellow">
                    <p class="t-a-r sub-heading color-yellow">Net Amount</p>
                </div>
                <div class="cell cell-22 bg-3 no-border border-bottom-yellow border-right-yellow">
                    <p>${data.netTotal}</p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-22 bg-5">
                    <p></p>
                </div>
            </div>
        </div>

        <div class="transaction-con" >
            <div class="full-cell cell bg-1">
                <p class="main-heading color-yellow">TRANSACTION DETAILS</p>
            </div>
            <div class="fx-con">
                <div class="cell cell-45 bg-2">
                    <p class="t-a-r sub-heading color-yellow">Business Name</p>
                </div>
                <div class="cell cell-55 bg-3">
                    <p>${data.booking.businessName}</p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-45 bg-4">
                    <p class="t-a-r sub-heading color-yellow">NTN</p>
                </div>
                <div class="cell cell-55 bg-5">
                    <p>
                        ${configuration.ntn}
                    </p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-45 bg-2">
                    <p class="t-a-r sub-heading color-yellow">Invoice Number</p>
                </div>
                <div class="cell cell-55 bg-3">
                    <p>
                        to be coded
                    </p>
                </div>
            </div>
            <div class="fx-con">
                <div class="cell cell-45 bg-4">
                    <p class="t-a-r sub-heading color-yellow">Invoice Date</p>
                </div>
                <div class="cell cell-55 bg-5">
                    <p>
                        Saturday, 05 March 2022
                    </p>
                </div>
            </div>
            <div class="fx-con">
            <div class="cell cell-45 bg-2">
                <p class="t-a-r sub-heading color-yellow">Account Title</p>
            </div>
            <div class="cell cell-55 bg-3">
                <p>
                TECHUB COWORKING SMC PRIVATE LIMITED
                </p>
            </div>
             </div>
             <div class="fx-con">
             <div class="cell cell-45 bg-4">
                 <p class="t-a-r sub-heading color-yellow"> Account Number</p>
             </div>
             <div class="cell cell-55 bg-5">
                 <p>
                 924695400568
                 </p>
             </div>
         </div>

         <div class="fx-con">
         <div class="cell cell-45 bg-2">
             <p class="t-a-r sub-heading color-yellow">Bank Name</p>
         </div>
         <div class="cell cell-55 bg-3">
             <p>
             Finja
             </p>
         </div>
     </div>

            
            <div class="fx-con">
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-12 bg-5">
                    <p></p>
                </div>
            </div>

            <div class="fx-con">
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-12 bg-5">
                    <p></p>
                </div>
            </div>

            <div class="fx-con">
                <div class="cell cell-11 bg-5" style="font-weight: bolder; font-style: italic;">
                    <p>NOTE:</p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-12 bg-5">
                    <p></p>
                </div>
            </div>
            <div class="full-cell cell bg-5" style="font-style: italic;">
                <p>
                    1.Respected Sir It will be a one year Contract if you will Terminate
                    this before one year Security Amount will not be Refundable.Thanks
                </p>
            </div>
            <div class="full-cell cell bg-5" style="font-style: italic;">
                <p>
                    2.Respected sir /Madam ,We will only Recived Checque aginst this
                    invoie ..Thanks
                </p>
            </div>
            <div class="fx-con">
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-11 bg-5">
                    <p></p>
                </div>
                <div class="cell cell-12 bg-5">
                    <p></p>
                </div>
            </div>
        </div>

        <table width="100%" class="table amenities-table" style="border: 2px solid #FAC11D; ">
            <thead>
                <tr>
                    <th colspan="8" style="background-color: #222222;">
                        <p class="color-yellow" style="margin: 0; background: #222222;">AMENITIES</p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="cell-bg-1">FURNISHED OFFICE</td>
                    <td class="cell-bg-3">INTERNET</td>
                    <td class="cell-bg-1">ELECTRICITY</td>
                    <td class="cell-bg-3">OFFICE BOY</td>
                    <td class="cell-bg-1">SWEEPER</td>
                    <td class="cell-bg-3">WATER</td>
                    <td class="cell-bg-1">TEA</td>
                    <td class="cell-bg-3">COFFEE</td>
                </tr>
                <tr>
                    <td class="cell-bg-3">PRINTING</td>
                    <td class="cell-bg-1">SCANNING</td>
                    <td class="cell-bg-3">MAIL HANDLING</td>
                    <td class="cell-bg-1">CCTV</td>
                    <td class="cell-bg-3">SECURITYY</td>
                    <td class="cell-bg-1">MEETING ROOM</td>
                    <td class="cell-bg-3">WAITING ZONE</td>
                    <td class="cell-bg-1">PLAY AREA</td>
                </tr>
                <tr>
                    <td class="cell-bg-1">ROOF TOP</td>
                    <td class="cell-bg-3">PENTRY</td>
                    <td class="cell-bg-1">ACTIVITY AREA</td>
                    <td class="cell-bg-3">ATTENDANCE</td>
                    <td class="cell-bg-1">GENERATOR</td>
                    <td class="cell-bg-3">PARKING</td>
                    <td class="cell-bg-1">FRONT DESK</td>
                    <td class="cell-bg-3">FOOD COURT</td>
                </tr>
                <tr>
                    <td class="cell-bg-3">BRANDING</td>
                    <td class="cell-bg-1">MAINTENANCE</td>
                    <td class="cell-bg-3">REPAIRING</td>
                    <td class="cell-bg-1">LOCKERS</td>
                    <td class="cell-bg-3">JOB PORTAL</td>
                    <td class="cell-bg-1">BIO. ACCESS</td>
                    <td class="cell-bg-3">EVENTS</td>
                    <td class="cell-bg-1">& much more</td>
                </tr>
                <tr>
                    <th colspan="8" class="footer" style="color: #FAC11D; background-color: #222222; font-size: 9px;">
                        ${data.booking.address}
                    </th>
                </tr>
<<<<<<< HEAD
            </tbody>
        </table>
=======
    `
    // if (data.booking.employeeCardPaymentPaid === 'Paid') {
    //     html += `
    //     <tr>
    //         <td class="cell-bg-5" colspan="2"></td>
    //         <td class="cell-bg-5"></td>
    //         <td class="cell-bg-5"></td>
    //         <td class="cell-bg-5"></td>
    //         <td class="cell-bg-5"></td>
    //         <td class="cell-bg-5"></td>
    //         <td class="cell-bg-5"></td>
    //       </tr>
    //     `    
    // } else {
    //     html += `
    //     <tr>
    //         <td class="cell-bg-5" colspan="2">Employee Card Charges</td>
    //         <td class="cell-bg-5"></td>
    //         <td class="cell-bg-5"></td>
    //         <td class="cell-bg-5">${data.booking.seats}</td>
    //         <td class="cell-bg-5">${configuration.employeeCardRate}</td>
    //         <td class="cell-bg-5"></td>
    //         <td class="cell-bg-5">${data.booking.employeeCardChargesTotal}</td>
    //       </tr>
    //     `
    // }
    html += `
        <tr>
        <td class="cell-bg-5" colspan="2"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
    </tr>
    <tr>
        <td class="cell-bg-5" colspan="2"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
    </tr>
    <tr>
        <td class="cell-bg-5" colspan="2"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
    </tr>
    <tr>
        <td class="cell-bg-5" colspan="2"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
    </tr>
    `
    if (data.booking.employeeCardPaymentPaid === 'Paid') {
        html += `
        <tr>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-1" colspan="2">Total</td>
            <td class="cell-bg-2" colspan="2">${data.booking.total}</td>
          </tr>
        `    
    } else {
        html += `
        <tr>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-1" colspan="2">Total</td>
            <td class="cell-bg-2" colspan="2">${data.booking.total + data.booking.employeeCardChargesTotal}</td>
          </tr>
        `
    }
    if (data.booking.securityPaid === 'Unpaid') {
        html += `
        <tr>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-3" colspan="2">Security Amount</td>
            <td class="cell-bg-4" colspan="2">${data.booking.securityCharges}</td>
          </tr>
        `    
    } else {
        html += `
        <tr>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-3" colspan="2">Security Amount</td>
            <td class="cell-bg-4" colspan="2">0</td>
          </tr>
        `
    }
    if (data.arrears) {
        html += `
        <tr>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-1" colspan="2">Arrears</td>
            <td class="cell-bg-2" colspan="2">${data.arrears}</td>
          </tr>
        `
    } else {
        html += `
        <tr>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-1" colspan="2">Arrears</td>
            <td class="cell-bg-2" colspan="2">0</td>
          </tr>
        `
    }
    html += `
        <tr>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-3" colspan="2">Tax</td>
        <td class="cell-bg-4" colspan="2">0</td>
    </tr>
    <tr>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-1" colspan="2">Net Amount</td>
        <td class="cell-bg-2" colspan="2">${data.netTotal}</td>
    </tr>
    <!-- Empty -->
    <tr>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
        <td class="cell-bg-5"></td>
    </tr>
    </tbody>
    </table>
    `
    html += `
        <table width="100%" class="table invoice-table">
        <thead>
        <tr>
            <th colspan="8">TRANSACTION DETAILS</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="cell-bg-3" colspan="4" style="width: 50% !important;">Business Name</td>
            <td class="cell-bg-4" colspan="4" style="width: 50% !important;">${data.booking.businessName}</td>
        </tr>
        <tr>
            <td class="cell-bg-1" colspan="4" style="width: 50% !important;">NTN</td>
            <td class="cell-bg-2" colspan="4" style="width: 50% !important;">${configuration.ntn}</td>
        </tr>
        <tr>
            <td class="cell-bg-3" colspan="4" style="width: 50% !important;">Invoice Number</td>
            <td class="cell-bg-4" colspan="4" style="width: 50% !important;">to be coded</td>
        </tr>
        <tr>
            <td class="cell-bg-1" colspan="4" style="width: 50% !important;">Invoice Date</td>
            <td class="cell-bg-2" colspan="4" style="width: 50% !important;">${moment(data.createdAt).format('dddd MMMM DD, YYYY')}</td>
        </tr>
        <!-- Empty -->
        <tr>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
        </tr>
        <tr>
            <td class="cell-bg-5" style="text-align: left">NOTE:</td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
        </tr>
        <tr>
            <td class="cell-bg-5" style="text-align: left" colspan="8">
            1.Respected Sir It will be a one year Contract if you will Terminate
            this before one year Security Amount will not be Refundable.Thanks
            </td>
        </tr>
        <tr>
            <td class="cell-bg-5" style="text-align: left" colspan="8">
            2.Respected sir /Madam ,We will only Recived Checque aginst this
            invoie ..Thanks
            </td>
        </tr>
        <tr>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
            <td class="cell-bg-5"></td>
        </tr>
        </tbody>
    </table>
    `
    html += `
        <table width="100%" class="table amenities-table">
        <thead>
        <tr>
            <th colspan="8">AMENITIES</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="cell-bg-1">FURNISHED OFFICE</td>
            <td class="cell-bg-3">INTERNET</td>
            <td class="cell-bg-1">ELECTRICITY</td>
            <td class="cell-bg-3">OFFICE BOY</td>
            <td class="cell-bg-1">SWEEPER</td>
            <td class="cell-bg-3">WATER</td>
            <td class="cell-bg-1">TEA</td>
            <td class="cell-bg-3">COFFEE</td>
        </tr>
        <tr>
            <td class="cell-bg-1">PRINTING</td>
            <td class="cell-bg-3">SCANNING</td>
            <td class="cell-bg-1">MAIL HANDLING</td>
            <td class="cell-bg-3">CCTV</td>
            <td class="cell-bg-1">SECURITYY</td>
            <td class="cell-bg-3">MEETING ROOM</td>
            <td class="cell-bg-1">WAITING ZONE</td>
            <td class="cell-bg-3">PLAY AREA</td>
        </tr>
        <tr>
            <td class="cell-bg-1">ROOF TOP</td>
            <td class="cell-bg-3">PENTRY</td>
            <td class="cell-bg-1">ACTIVITY AREA</td>
            <td class="cell-bg-3">ATTENDANCE</td>
            <td class="cell-bg-1">GENERATOR</td>
            <td class="cell-bg-3">PARKING</td>
            <td class="cell-bg-1">FRONT DESK</td>
            <td class="cell-bg-3">FOOD COURT</td>
        </tr>
        <tr>
            <td class="cell-bg-1">BRANDING</td>
            <td class="cell-bg-3">MAINTENANCE</td>
            <td class="cell-bg-1">REPAIRING</td>
            <td class="cell-bg-3">LOCKERS</td>
            <td class="cell-bg-1">JOB PORTAL</td>
            <td class="cell-bg-3">BIO. ACCESS</td>
            <td class="cell-bg-1">EVENTS</td>
            <td class="cell-bg-3">& much more</td>
        </tr>
        <tr>
            <th colspan="8" class="footer">
                ${data.booking.address}
            </th>
        </tr>
        </tbody>
    </table>
>>>>>>> 81bc7d0e61bfaf5077a99409f907d7eb1030546f
    </div>
</body>

</html>
    `

    return html
}