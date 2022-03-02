import { cache } from "./storage";

export const defaultCurrency = { "code": "USD", "name": "United States Dollars", "symbol": "&#36;", "rate": 1 }

export const staticCurrencies =  {
  "AED": { "code": "AED", "name": "United Arab Emirates Dirhams", "symbol": "Dh" },
  "AFN": { "code": "AFN", "name": "Afghanistan Afghanis", "symbol": "&#1547;" },
  "ALL": { "code": "ALL", "name": "Albania Leke", "symbol": "&#76;&#101;&#107;" },
  "AMD": { "code": "AMD", "name": "Armenian Dram", "symbol": "AMD" },
  "AOA": { "code": "AOA", "name": "Angolan Kwanza", "symbol": "AOA" },
  "ARS": { "code": "ARS", "name": "Argentina Pesos", "symbol": "&#36;" },
  "AUD": { "code": "AUD", "name": "Australia Dollars", "symbol": "&#36;" },
  "AZN": { "code": "AZN", "name": "Azerbaijani Manat", "symbol": "&#1084;&#1072;&#1085;" },
  "BDT": { "code": "BDT", "name": "Bangladesh Taka", "symbol": "Tk" },
  "BGN": { "code": "BGN", "name": "Bulgaria Leva", "symbol": "&#1083;&#1074;" },
  "BHD": { "code": "BHD", "name": "Bahrain Dinars", "symbol": "BD" },
  "BIF": { "code": "BIF", "name": "Burundian Franc", "symbol": "FBu" },
  "BIH": { "code": "BIH", "name": "Bosnia-Herzegovina Convertible Marka", "symbol": "&#36;" },
  "BND": { "code": "BND", "name": "Brunei Dollar", "symbol": "&#36;" },
  "BOB": { "code": "BOB", "name": "Bolivian Boliviano", "symbol": "&#36;&#98;" },
  "BRL": { "code": "BRL", "name": "Brazil Reais", "symbol": "&#82;&#36;" },
  "BSD": { "code": "BSD", "name": "Bahamas Dollars", "symbol": "&#36;" },
  "BTC": { "code": "BTC", "name": "Bitcoin", "symbol": "BTC" },
  "BWP": { "code": "BWP", "name": "Botswanan Pula", "symbol": "&#80;" },
  "BYR": { "code": "BYR", "name": "Belarusian Ruble", "symbol": "BYR" },
  "CAD": { "code": "CAD", "name": "Canada Dollars", "symbol": "&#36;" },
  "CDF": { "code": "CDF", "name": "Congolese Franc", "symbol": "FC" },
  "CHF": { "code": "CHF", "name": "Switzerland Francs", "symbol": "&#67;&#72;&#70;" },
  "CLP": { "code": "CLP", "name": "Chile Pesos", "symbol": "&#36;" },
  "CNY": { "code": "CNY", "name": "China Yuan Renminbi", "symbol": "&#20803;" },
  "COP": { "code": "COP", "name": "Colombia Pesos", "symbol": "&#36;" },
  "CRC": { "code": "CRC", "name": "Costa Rica Colones", "symbol": "&#8353;" },
  "CUC": { "code": "CUC", "name": "Cuba Convertible Peso", "symbol": "CUC$" },
  "CVE": { "code": "CVE", "name": "Cape Verdean Escudo", "symbol": "CVE" },
  "CZK": { "code": "CZK", "name": "Czech Republic Koruny", "symbol": "&#75;&#269;" },
  "DJF": { "code": "DJF", "name": "Djiboutian Franc", "symbol": "DJF" },
  "DKK": { "code": "DKK", "name": "Denmark Kroner", "symbol": "&#107;&#114;" },
  "DOP": { "code": "DOP", "name": "Dominican Republic Pesos", "symbol": "&#82;&#68;&#36;" },
  "DZD": { "code": "DZD", "name": "Algeria Dinars", "symbol": "DA" },
  "EGP": { "code": "EGP", "name": "Egypt Pounds", "symbol": "&#163;" },
  "ERN": { "code": "ERN", "name": "Eritrean Nakfa", "symbol": "ERN" },
  "ETB": { "code": "ETB", "name": "Ethiopian Birr", "symbol": "ETB" },
  "ETH": { "code": "ETH", "name": "Ethereum", "symbol": "ETH" },
  "EUR": { "code": "EUR", "name": "Euro", "symbol": "&#8364;" },
  "FJD": { "code": "FJD", "name": "Fiji Dollars", "symbol": "&#36;" },
  "GBP": { "code": "GBP", "name": "United Kingdom Pounds", "symbol": "&#163;" },
  "GEL": { "code": "GEL", "name": "Georgian Lari", "symbol": "GEL" },
  "GHS": { "code": "GHS", "name": "Ghanaian Cedi", "symbol": "&#162;" },
  "GMD": { "code": "GMD", "name": "Gambian Dalasi", "symbol": "D" },
  "GNF": { "code": "GNF", "name": "Guinean Franc", "symbol": "GNF" },
  "GTQ": { "code": "GTQ", "name": "Guatemalan Quetzal", "symbol": "&#81;" },
  "GYD": { "code": "GYD", "name": "Guyanaese Dollar", "symbol": "&#36;" },
  "HKD": { "code": "HKD", "name": "Hong Kong Dollars", "symbol": "&#20803;" },
  "HNL": { "code": "HNL", "name": "Honduran Lempira", "symbol": "&#76;" },
  "HRV": { "code": "HRV", "name": "Ukrainian Hryvnia", "symbol": "грн" },
  "HTG": { "code": "HTG", "name": "Haitian Gourde", "symbol": "G" },
  "HUF": { "code": "HUF", "name": "Hungary Forint", "symbol": "&#70;&#116;" },
  "IDR": { "code": "IDR", "name": "Indonesia Rupiahs", "symbol": "&#82;&#112;" },
  "ILS": { "code": "ILS", "name": "Israel New Shekels", "symbol": "&#8362;" },
  "INR": { "code": "INR", "name": "India Rupees", "symbol": "&#8377;" },
  "IQD": { "code": "IQD", "name": "Iraq Dinars", "symbol": "ID" },
  "IRR": { "code": "IRR", "name": "Iran Rials", "symbol": "&#65020;" },
  "ISK": { "code": "ISK", "name": "Iceland Kronur", "symbol": "&#107;&#114;" },
  "JMD": { "code": "JMD", "name": "Jamaica Dollars", "symbol": "&#74;&#36;" },
  "JOD": { "code": "JOD", "name": "Jordan Dinars", "symbol": "JD" },
  "JPY": { "code": "JPY", "name": "Japan Yen", "symbol": "&#165;" },
  "KES": { "code": "KES", "name": "Kenya Shillings", "symbol": "K Sh" },
  "KGS": { "code": "KGS", "name": "Kyrgystani Som", "symbol": "&#1083;&#1074;" },
  "KHR": { "code": "KHR", "name": "Cambodian Riel", "symbol": "&#6107;" },
  "KMF": { "code": "KMF", "name": "Comorian Franc", "symbol": "KMF" },
  "KRW": { "code": "KRW", "name": "South Korea Won", "symbol": "&#8361;" },
  "KYD": { "code": "KYD", "name": "Cayman Islands Dollar", "symbol": "&#36;" },
  "KZT": { "code": "KZT", "name": "Kazakhstan Tenge", "symbol": "&#1083;&#1074;" },
  "LAK": { "code": "LAK", "name": "Laotian Kip", "symbol": "&#8365;" },
  "LBP": { "code": "LBP", "name": "Lebanon Pounds", "symbol": "LBP" },
  "LKR": { "code": "LKR", "name": "Sri Lanka Rupees", "symbol": "&#8360;" },
  "LRD": { "code": "LRD", "name": "Liberian Dollar", "symbol": "&#36;" },
  "LSL": { "code": "LSL", "name": "Lesotho Loti", "symbol": "L" },
  "LTC": { "code": "LTC", "name": "Litecoin", "symbol": "LTC" },
  "LYD": { "code": "LYD", "name": "Libyan Dinar", "symbol": "LYD" },
  "MAD": { "code": "MAD", "name": "Morocco Dirhams", "symbol": "DH" },
  "MDL": { "code": "MDL", "name": "Moldovan Leu", "symbol": "MDL" },
  "MGA": { "code": "MGA", "name": "Malagasy Ariary", "symbol": "MGA" },
  "MKD": { "code": "MKD", "name": "Macedonian Denar", "symbol": "&#1076;&#1077;&#1085;" },
  "MMK": { "code": "MMK", "name": "Myanma Kyat", "symbol": "K" },
  "MNT": { "code": "MNT", "name": "Mongolian Tugrik", "symbol": "&#8366;" },
  "MOP": { "code": "MOP", "name": "Macanese Pataca", "symbol": "sin" },
  "MUR": { "code": "MUR", "name": "Mauritius Rupees", "symbol": "&#8360;" },
  "MVR": { "code": "MVR", "name": "Maldivian Rufiyaa", "symbol": "MVR" },
  "MWK": { "code": "MWK", "name": "Malawian Kwacha", "symbol": "MWK" },
  "MXN": { "code": "MXN", "name": "Mexico Pesos", "symbol": "&#36;" },
  "MYR": { "code": "MYR", "name": "Malaysia Ringgits", "symbol": "&#82;&#77;" },
  "MZN": { "code": "MZN", "name": "Mozambican Metical", "symbol": "&#77;&#84;" },
  "NAD": { "code": "NAD", "name": "Namibian Dollar", "symbol": "&#36;" },
  "NGN": { "code": "NGN", "name": "Nigeria Nairas", "symbol": "&#8358;" },
  "NIO": { "code": "NIO", "name": "Nicaraguan Córdoba", "symbol": "&#67;&#36;" },
  "NOK": { "code": "NOK", "name": "Norway Kroner", "symbol": "&#107;&#114;" },
  "NPR": { "code": "NPR", "name": "Nepalese Rupee", "symbol": "&#8360;" },
  "NZD": { "code": "NZD", "name": "New Zealand Dollars", "symbol": "&#36;" },
  "OMR": { "code": "OMR", "name": "Oman Rials", "symbol": "&#65020;" },
  "PAB": { "code": "PAB", "name": "Panamanian Balboa", "symbol": "&#66;&#47;&#46;" },
  "PEN": { "code": "PEN", "name": "Peru Nuevos Soles", "symbol": "&#83;&#47;&#46;" },
  "PGK": { "code": "PGK", "name": "Papua New Guinean Kina", "symbol": "PGK" },
  "PHP": { "code": "PHP", "name": "Philippines Pesos", "symbol": "&#80;&#104;&#112;" },
  "PKR": { "code": "PKR", "name": "Pakistan Rupees", "symbol": "&#8360;" },
  "PLN": { "code": "PLN", "name": "Poland Zlotych", "symbol": "&#122;&#322;" },
  "PYG": { "code": "PYG", "name": "Paraguayan Guarani", "symbol": "&#71;&#115;" },
  "QAR": { "code": "QAR", "name": "Qatar Riyals", "symbol": "&#65020;" },
  "RON": { "code": "RON", "name": "Romania New Lei", "symbol": "&#108;&#101;&#105;" },
  "RSD": { "code": "RSD", "name": "Serbian Dinar", "symbol": "&#1044;&#1080;&#1085;&#46;" },
  "RUB": { "code": "RUB", "name": "Russia Rubles", "symbol": "&#1088;&#1091;&#1073;" },
  "RWF": { "code": "RWF", "name": "Rwandan Franc", "symbol": "RWF" },
  "SAR": { "code": "SAR", "name": "Saudi Arabia Riyals", "symbol": "&#65020;" },
  "SCR": { "code": "SCR", "name": "Seychellois Rupee", "symbol": "&#8360;" },
  "SDG": { "code": "SDG", "name": "Sudan Pounds", "symbol": "SDG" },
  "SEK": { "code": "SEK", "name": "Sweden Kronor", "symbol": "&#107;&#114;" },
  "SGD": { "code": "SGD", "name": "Singapore Dollars", "symbol": "&#36;" },
  "SLL": { "code": "SLL", "name": "Sierra Leonean Leone", "symbol": "SLL" },
  "SOS": { "code": "SOS", "name": "Somali Shilling", "symbol": "&#83;" },
  "SRD": { "code": "SRD", "name": "Surinamese Dollar", "symbol": "&#36;" },
  "STD": { "code": "STD", "name": "Solomon Islands Dollar", "symbol": "STD" },
  "SVC": { "code": "SVC", "name": "Salvadoran Colón", "symbol": "&#36;" },
  "SYP": { "code": "SYP", "name": "Syrian Pound", "symbol": "&#163;" },
  "SZL": { "code": "SZL", "name": "Swazi Lilangeni", "symbol": "L" },
  "THB": { "code": "THB", "name": "Thailand Baht", "symbol": "&#3647;" },
  "TJS": { "code": "TJS", "name": "Tajikistani Somoni", "symbol": "TJS" },
  "TMT": { "code": "TMT", "name": "Turkmenistani Manat", "symbol": "T" },
  "TND": { "code": "TND", "name": "Tunisia Dinars", "symbol": "TD" },
  "TRY": { "code": "TRY", "name": "Turkey Lira", "symbol": "&#89;&#84;&#76;" },
  "TTD": { "code": "TTD", "name": "Trinidad and Tobago Dollars", "symbol": "&#84;&#84;&#36;" },
  "TWD": { "code": "TWD", "name": "Taiwan New Dollars", "symbol": "&#78;&#84;&#36;" },
  "TZS": { "code": "TZS", "name": "Tanzanian Shilling", "symbol": "TZS" },
  "UAH": { "code": "UAH", "name": "Ukrainian Hryvnia", "symbol": "&#8372;" },
  "UGX": { "code": "UGX", "name": "Ugandan Shilling", "symbol": "UGX" },
  "URY": { "code": "URY", "name": "Uruguayan Peso", "symbol": "&#36;&#85;" },
  "USD": { "code": "USD", "name": "United States Dollars", "symbol": "&#36;" },
  "UZS": { "code": "UZS", "name": "Uzbekistan Som", "symbol": "&#1083;&#1074;" },
  "VND": { "code": "VND", "name": "Vietnam Dong", "symbol": "&#8363;" },
  "XAF": { "code": "XAF", "name": "CFA Francs BEAC", "symbol": "CFAF" },
  "XOF": { "code": "XOF", "name": "CFA Francs BCEAO", "symbol": "CFAF" },
  "XPF": { "code": "XPF", "name": "CFP Francs", "symbol": "₣" },
  "XRP": { "code": "XRP", "name": "Ripple", "symbol": "XRP" },
  "YER": { "code": "YER", "name": "Yemeni Rial", "symbol": "&#65020;" },
  "ZAR": { "code": "ZAR", "name": "South Africa Rand", "symbol": "&#82;" }
}

export const currenciesWithRate = async (returnType = "array") => {
  return cache('currenciesWithRate', Date.now() + (60 * 60 * 1000), async () => {
    /**
    * Sample rates:
      const rates = {
        "JPY": 114.87825,
        ...
      }
    */
    const url = `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.NEXT_FREE_CURRENCY_API_KEY}`
    const response = await fetch(url)
    const ratesRes = await response.json()
    if(!ratesRes.data){
        return staticCurrencies;
    }
    const rates = ratesRes.data
    const result = JSON.parse(JSON.stringify(staticCurrencies))
    Object.values(result).map(currency => {
      if(currency.code === "USD"){
        currency.rate = 1
      }else{
        currency.rate = rates[currency.code] || 0
      }
      return currency
    })
    return result
  })
}

export const userCurrencyByIP = async () => {
  return cache('userCurrency', Date.now() + (24 * 60 * 60 * 1000), async () => {
    const url = `http://www.geoplugin.net/json.gp`
    const response = await fetch(url)
    const json = await response.json()
    const currencies = await currenciesWithRate('object')
    if (json.geoplugin_currencyCode && currencies[json.geoplugin_currencyCode]) {
      return currencies[json.geoplugin_currencyCode]
    }
    return defaultCurrency
  })
}
