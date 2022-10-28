import e from "express";

export class Values{

    private static points: Object = {};

    public static get(code: string){
        let path = this.points[code];

        if(!path){
            path = this.points['2484'];
        }

        const points = path['details'].map((e: any) => [e.routed_y, e.routed_x]);
        const stations = path['stops'].map((s: any) =>{
            return {
                stationCode: s.StopCode,
                id: s.StopID,
                description: s.StopDescr,
                latLong: [s.StopLat, s.StopLng],
                heading: s.StopHeading
            };
        });

        return {
            routeCode: code,
            stations: stations,
            latLong: points
        };

    }

    public static init(){
        this.points['2484'] = {
            "details": [
                {
                    "routed_x": "23.73153",
                    "routed_y": "37.98545",
                    "routed_order": "1"
                },
                {
                    "routed_x": "23.73147",
                    "routed_y": "37.98522",
                    "routed_order": "2"
                },
                {
                    "routed_x": "23.73144",
                    "routed_y": "37.98513",
                    "routed_order": "3"
                },
                {
                    "routed_x": "23.73231",
                    "routed_y": "37.98409",
                    "routed_order": "4"
                },
                {
                    "routed_x": "23.73323",
                    "routed_y": "37.98283",
                    "routed_order": "5"
                },
                {
                    "routed_x": "23.73352",
                    "routed_y": "37.98303",
                    "routed_order": "6"
                },
                {
                    "routed_x": "23.73433",
                    "routed_y": "37.98348",
                    "routed_order": "7"
                },
                {
                    "routed_x": "23.73501",
                    "routed_y": "37.98382",
                    "routed_order": "8"
                },
                {
                    "routed_x": "23.73633",
                    "routed_y": "37.9845",
                    "routed_order": "9"
                },
                {
                    "routed_x": "23.738",
                    "routed_y": "37.98537",
                    "routed_order": "10"
                },
                {
                    "routed_x": "23.73947",
                    "routed_y": "37.98613",
                    "routed_order": "11"
                },
                {
                    "routed_x": "23.74093",
                    "routed_y": "37.98688",
                    "routed_order": "12"
                },
                {
                    "routed_x": "23.74236",
                    "routed_y": "37.98759",
                    "routed_order": "13"
                },
                {
                    "routed_x": "23.74324",
                    "routed_y": "37.98807",
                    "routed_order": "14"
                },
                {
                    "routed_x": "23.74464",
                    "routed_y": "37.98878",
                    "routed_order": "15"
                },
                {
                    "routed_x": "23.74531",
                    "routed_y": "37.98917",
                    "routed_order": "16"
                },
                {
                    "routed_x": "23.74566",
                    "routed_y": "37.98938",
                    "routed_order": "17"
                },
                {
                    "routed_x": "23.74584",
                    "routed_y": "37.98955",
                    "routed_order": "18"
                },
                {
                    "routed_x": "23.74594",
                    "routed_y": "37.98998",
                    "routed_order": "19"
                },
                {
                    "routed_x": "23.74607",
                    "routed_y": "37.99047",
                    "routed_order": "20"
                },
                {
                    "routed_x": "23.74622",
                    "routed_y": "37.99101",
                    "routed_order": "21"
                },
                {
                    "routed_x": "23.74784",
                    "routed_y": "37.99073",
                    "routed_order": "22"
                },
                {
                    "routed_x": "23.74831",
                    "routed_y": "37.99064",
                    "routed_order": "23"
                },
                {
                    "routed_x": "23.74874",
                    "routed_y": "37.99202",
                    "routed_order": "24"
                },
                {
                    "routed_x": "23.749",
                    "routed_y": "37.99278",
                    "routed_order": "25"
                },
                {
                    "routed_x": "23.74991",
                    "routed_y": "37.99334",
                    "routed_order": "26"
                },
                {
                    "routed_x": "23.75003",
                    "routed_y": "37.99342",
                    "routed_order": "27"
                },
                {
                    "routed_x": "23.74996",
                    "routed_y": "37.99356",
                    "routed_order": "28"
                },
                {
                    "routed_x": "23.74947",
                    "routed_y": "37.99334",
                    "routed_order": "29"
                },
                {
                    "routed_x": "23.74867",
                    "routed_y": "37.99295",
                    "routed_order": "30"
                },
                {
                    "routed_x": "23.74891",
                    "routed_y": "37.99282",
                    "routed_order": "31"
                },
                {
                    "routed_x": "23.74842",
                    "routed_y": "37.99115",
                    "routed_order": "32"
                },
                {
                    "routed_x": "23.74781",
                    "routed_y": "37.98911",
                    "routed_order": "33"
                },
                {
                    "routed_x": "23.74809",
                    "routed_y": "37.98895",
                    "routed_order": "34"
                },
                {
                    "routed_x": "23.7412",
                    "routed_y": "37.98558",
                    "routed_order": "35"
                },
                {
                    "routed_x": "23.74016",
                    "routed_y": "37.98507",
                    "routed_order": "36"
                },
                {
                    "routed_x": "23.73822",
                    "routed_y": "37.98407",
                    "routed_order": "37"
                },
                {
                    "routed_x": "23.73667",
                    "routed_y": "37.98334",
                    "routed_order": "38"
                },
                {
                    "routed_x": "23.73557",
                    "routed_y": "37.98278",
                    "routed_order": "39"
                },
                {
                    "routed_x": "23.73509",
                    "routed_y": "37.98254",
                    "routed_order": "40"
                },
                {
                    "routed_x": "23.73354",
                    "routed_y": "37.98444",
                    "routed_order": "41"
                },
                {
                    "routed_x": "23.7322",
                    "routed_y": "37.98612",
                    "routed_order": "42"
                },
                {
                    "routed_x": "23.73174",
                    "routed_y": "37.98618",
                    "routed_order": "43"
                },
                {
                    "routed_x": "23.73159",
                    "routed_y": "37.98562",
                    "routed_order": "44"
                }
            ],
            "stops": [
                {
                    "StopCode": "10175",
                    "StopID": "18",
                    "StopDescr": "ΠΛ. ΚΑΝΙΓΓΟΣ",
                    "StopDescrEng": "PL. KANNIGOS",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "140",
                    "StopLat": "37.98566",
                    "StopLng": "23.73113",
                    "RouteStopOrder": "1",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60010",
                    "StopID": "060010",
                    "StopDescr": "ΝΑΥΑΡΙΝΟΥ",
                    "StopDescrEng": "NAYARINOY",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "63",
                    "StopLat": "37.9837048",
                    "StopLng": "23.7349122",
                    "RouteStopOrder": "2",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60011",
                    "StopID": "060011",
                    "StopDescr": "ΑΡΑΧΩΒΗΣ",
                    "StopDescrEng": "ARAXOBHS",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "66",
                    "StopLat": "37.9849398",
                    "StopLng": "23.7374186",
                    "RouteStopOrder": "3",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60012",
                    "StopID": "060012",
                    "StopDescr": "ΚΑΛΛΙΔΡΟΜΙΟΥ",
                    "StopDescrEng": "KALLIDROMIOY",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "67",
                    "StopLat": "37.985911",
                    "StopLng": "23.7392359",
                    "RouteStopOrder": "4",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60013",
                    "StopID": "060013",
                    "StopDescr": "ΤΣΙΜΙΣΚΗ",
                    "StopDescrEng": "TSIMISKH",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "59",
                    "StopLat": "37.9869527",
                    "StopLng": "23.7411863",
                    "RouteStopOrder": "5",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60014",
                    "StopID": "060014",
                    "StopDescr": "ΛΑΣΚΑΡΕΩΣ",
                    "StopDescrEng": "LASKAREOS",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "52",
                    "StopLat": "37.9884026",
                    "StopLng": "23.7439909",
                    "RouteStopOrder": "6",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60017",
                    "StopID": "060017",
                    "StopDescr": "ΑΓ. ΕΛΕΥΘΕΡΙΟΣ",
                    "StopDescrEng": "AG. ELEYTHERIOS",
                    "StopStreet": "ΜΟΜΦΕΡΑΤΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "39",
                    "StopLat": "37.9909293",
                    "StopLng": "23.7465462",
                    "RouteStopOrder": "7",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60018",
                    "StopID": "060018",
                    "StopDescr": "ΜΟΜΦΕΡΑΤΟΥ",
                    "StopDescrEng": "MOMFERATOY",
                    "StopStreet": "ΜΟΜΦΕΡΑΤΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "98",
                    "StopLat": "37.9906755",
                    "StopLng": "23.7479147",
                    "RouteStopOrder": "8",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60019",
                    "StopID": "060019",
                    "StopDescr": "ΣΚΑΛΑΚΙΑ",
                    "StopDescrEng": "SKALAKIA",
                    "StopStreet": "ΓΚΥΖΗ",
                    "StopStreetEng": null,
                    "StopHeading": "16",
                    "StopLat": "37.9924673",
                    "StopLng": "23.7489433",
                    "RouteStopOrder": "9",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60020",
                    "StopID": "060020",
                    "StopDescr": "ΠΛ. ΓΚΥΖΗ",
                    "StopDescrEng": "PL. GYZH",
                    "StopStreet": "ΠΛ.ΓΚΥΖΗ",
                    "StopStreetEng": null,
                    "StopHeading": "-1",
                    "StopLat": "37.9933834",
                    "StopLng": "23.749251",
                    "RouteStopOrder": "10",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60021",
                    "StopID": "060021",
                    "StopDescr": "ΣΚΑΛΑΚΙΑ",
                    "StopDescrEng": "SKALAKIA",
                    "StopStreet": "ΓΚΥΖΗ",
                    "StopStreetEng": null,
                    "StopHeading": "196",
                    "StopLat": "37.992021",
                    "StopLng": "23.7485723",
                    "RouteStopOrder": "11",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60022",
                    "StopID": "060022",
                    "StopDescr": "ΜΟΜΦΕΡΑΤΟΥ",
                    "StopDescrEng": "MOMFERATOY",
                    "StopStreet": "ΓΚΥΖΗ",
                    "StopStreetEng": null,
                    "StopHeading": "197",
                    "StopLat": "37.9909207",
                    "StopLng": "23.7482344",
                    "RouteStopOrder": "12",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60023",
                    "StopID": "060023",
                    "StopDescr": "ΠΑΡΑΣΧΟΥ",
                    "StopDescrEng": "PARASXOY",
                    "StopStreet": "ΓΚΥΖΗ",
                    "StopStreetEng": null,
                    "StopHeading": "196",
                    "StopLat": "37.9899376",
                    "StopLng": "23.7479189",
                    "RouteStopOrder": "13",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60024",
                    "StopID": "060024",
                    "StopDescr": "ΙΠΠΟΚΡΑΤΟΥΣ (ΑΦΕΤΗΡΙΑ)",
                    "StopDescrEng": "IPPOKRATOYS (AFETHRIA)",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "242",
                    "StopLat": "37.9884301",
                    "StopLng": "23.7468308",
                    "RouteStopOrder": "14",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60666",
                    "StopID": "060666",
                    "StopDescr": "ΛΑΣΚΑΡΕΩΣ",
                    "StopDescrEng": "LASKAREOS",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "247",
                    "StopLat": "37.9869545",
                    "StopLng": "23.7437954",
                    "RouteStopOrder": "15",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60667",
                    "StopID": "060667",
                    "StopDescr": "ΤΣΙΜΙΣΚΗ",
                    "StopDescrEng": "TSIMISKH",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "245",
                    "StopLat": "37.9859948",
                    "StopLng": "23.7418287",
                    "RouteStopOrder": "16",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60668",
                    "StopID": "060668",
                    "StopDescr": "ΚΑΛΛΙΔΡΟΜΙΟΥ",
                    "StopDescrEng": "KALLIDROMIOY",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "244",
                    "StopLat": "37.9847817",
                    "StopLng": "23.7394074",
                    "RouteStopOrder": "17",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61109",
                    "StopID": "061109",
                    "StopDescr": "ΔΙΔΟΤΟΥ",
                    "StopDescrEng": "DIDOTOY",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "242",
                    "StopLat": "37.9835505",
                    "StopLng": "23.7369407",
                    "RouteStopOrder": "18",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60767",
                    "StopID": "060767",
                    "StopDescr": "ΣΟΛΩΝΟΣ",
                    "StopDescrEng": "SOLONOS",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "247",
                    "StopLat": "37.9826814",
                    "StopLng": "23.735213",
                    "RouteStopOrder": "19",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60030",
                    "StopID": "060030",
                    "StopDescr": "ΖΩΟΔΟΧΟΣ ΠΗΓΗ",
                    "StopDescrEng": "ZOODOXOS PHGH",
                    "StopStreet": "ΣΟΛΩΝΟΣ",
                    "StopStreetEng": null,
                    "StopHeading": "320",
                    "StopLat": "37.9843568",
                    "StopLng": "23.733688",
                    "RouteStopOrder": "20",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60031",
                    "StopID": "060031",
                    "StopDescr": "ΜΠΟΤΑΣΗ",
                    "StopDescrEng": "MPOTASH",
                    "StopStreet": "ΣΟΛΩΝΟΣ",
                    "StopStreetEng": null,
                    "StopHeading": "314",
                    "StopLat": "37.9855885",
                    "StopLng": "23.7326812",
                    "RouteStopOrder": "21",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "10175",
                    "StopID": "18",
                    "StopDescr": "ΠΛ. ΚΑΝΙΓΓΟΣ",
                    "StopDescrEng": "PL. KANNIGOS",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "140",
                    "StopLat": "37.98566",
                    "StopLng": "23.73113",
                    "RouteStopOrder": "22",
                    "StopType": "0",
                    "StopAmea": "0"
                }
            ]
        }

        this.points['4198'] = {
            "details": [
                {
                    "routed_x": "23.74983",
                    "routed_y": "37.99337",
                    "routed_order": "1"
                },
                {
                    "routed_x": "23.75002",
                    "routed_y": "37.99348",
                    "routed_order": "2"
                },
                {
                    "routed_x": "23.74996",
                    "routed_y": "37.99356",
                    "routed_order": "3"
                },
                {
                    "routed_x": "23.74946",
                    "routed_y": "37.99328",
                    "routed_order": "4"
                },
                {
                    "routed_x": "23.74893",
                    "routed_y": "37.99293",
                    "routed_order": "5"
                },
                {
                    "routed_x": "23.74891",
                    "routed_y": "37.99282",
                    "routed_order": "6"
                },
                {
                    "routed_x": "23.74842",
                    "routed_y": "37.99115",
                    "routed_order": "7"
                },
                {
                    "routed_x": "23.74781",
                    "routed_y": "37.98911",
                    "routed_order": "8"
                },
                {
                    "routed_x": "23.74809",
                    "routed_y": "37.98895",
                    "routed_order": "9"
                },
                {
                    "routed_x": "23.7412",
                    "routed_y": "37.98558",
                    "routed_order": "10"
                },
                {
                    "routed_x": "23.74016",
                    "routed_y": "37.98507",
                    "routed_order": "11"
                },
                {
                    "routed_x": "23.73822",
                    "routed_y": "37.98407",
                    "routed_order": "12"
                },
                {
                    "routed_x": "23.73667",
                    "routed_y": "37.98334",
                    "routed_order": "13"
                },
                {
                    "routed_x": "23.73557",
                    "routed_y": "37.98278",
                    "routed_order": "14"
                },
                {
                    "routed_x": "23.73509",
                    "routed_y": "37.98254",
                    "routed_order": "15"
                },
                {
                    "routed_x": "23.73354",
                    "routed_y": "37.98444",
                    "routed_order": "16"
                },
                {
                    "routed_x": "23.7322",
                    "routed_y": "37.98612",
                    "routed_order": "17"
                },
                {
                    "routed_x": "23.73174",
                    "routed_y": "37.98618",
                    "routed_order": "18"
                },
                {
                    "routed_x": "23.73159",
                    "routed_y": "37.98562",
                    "routed_order": "19"
                }
            ],
            "stops": [
                {
                    "StopCode": "10176",
                    "StopID": "19",
                    "StopDescr": "ΠΛ. ΓΚΥΖΗ",
                    "StopDescrEng": "PL. GYZH",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "51",
                    "StopLat": "37.9933216",
                    "StopLng": "23.7493223",
                    "RouteStopOrder": "1",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60021",
                    "StopID": "060021",
                    "StopDescr": "ΣΚΑΛΑΚΙΑ",
                    "StopDescrEng": "SKALAKIA",
                    "StopStreet": "ΓΚΥΖΗ",
                    "StopStreetEng": null,
                    "StopHeading": "196",
                    "StopLat": "37.992021",
                    "StopLng": "23.7485723",
                    "RouteStopOrder": "2",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60022",
                    "StopID": "060022",
                    "StopDescr": "ΜΟΜΦΕΡΑΤΟΥ",
                    "StopDescrEng": "MOMFERATOY",
                    "StopStreet": "ΓΚΥΖΗ",
                    "StopStreetEng": null,
                    "StopHeading": "197",
                    "StopLat": "37.9909207",
                    "StopLng": "23.7482344",
                    "RouteStopOrder": "3",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60023",
                    "StopID": "060023",
                    "StopDescr": "ΠΑΡΑΣΧΟΥ",
                    "StopDescrEng": "PARASXOY",
                    "StopStreet": "ΓΚΥΖΗ",
                    "StopStreetEng": null,
                    "StopHeading": "196",
                    "StopLat": "37.9899376",
                    "StopLng": "23.7479189",
                    "RouteStopOrder": "4",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60024",
                    "StopID": "060024",
                    "StopDescr": "ΙΠΠΟΚΡΑΤΟΥΣ (ΑΦΕΤΗΡΙΑ)",
                    "StopDescrEng": "IPPOKRATOYS (AFETHRIA)",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "242",
                    "StopLat": "37.9884301",
                    "StopLng": "23.7468308",
                    "RouteStopOrder": "5",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60666",
                    "StopID": "060666",
                    "StopDescr": "ΛΑΣΚΑΡΕΩΣ",
                    "StopDescrEng": "LASKAREOS",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "247",
                    "StopLat": "37.9869545",
                    "StopLng": "23.7437954",
                    "RouteStopOrder": "6",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60667",
                    "StopID": "060667",
                    "StopDescr": "ΤΣΙΜΙΣΚΗ",
                    "StopDescrEng": "TSIMISKH",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "245",
                    "StopLat": "37.9859948",
                    "StopLng": "23.7418287",
                    "RouteStopOrder": "7",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60668",
                    "StopID": "060668",
                    "StopDescr": "ΚΑΛΛΙΔΡΟΜΙΟΥ",
                    "StopDescrEng": "KALLIDROMIOY",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "244",
                    "StopLat": "37.9847817",
                    "StopLng": "23.7394074",
                    "RouteStopOrder": "8",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61109",
                    "StopID": "061109",
                    "StopDescr": "ΔΙΔΟΤΟΥ",
                    "StopDescrEng": "DIDOTOY",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "242",
                    "StopLat": "37.9835505",
                    "StopLng": "23.7369407",
                    "RouteStopOrder": "9",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60767",
                    "StopID": "060767",
                    "StopDescr": "ΣΟΛΩΝΟΣ",
                    "StopDescrEng": "SOLONOS",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "247",
                    "StopLat": "37.9826814",
                    "StopLng": "23.735213",
                    "RouteStopOrder": "10",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60030",
                    "StopID": "060030",
                    "StopDescr": "ΖΩΟΔΟΧΟΣ ΠΗΓΗ",
                    "StopDescrEng": "ZOODOXOS PHGH",
                    "StopStreet": "ΣΟΛΩΝΟΣ",
                    "StopStreetEng": null,
                    "StopHeading": "320",
                    "StopLat": "37.9843568",
                    "StopLng": "23.733688",
                    "RouteStopOrder": "11",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60031",
                    "StopID": "060031",
                    "StopDescr": "ΜΠΟΤΑΣΗ",
                    "StopDescrEng": "MPOTASH",
                    "StopStreet": "ΣΟΛΩΝΟΣ",
                    "StopStreetEng": null,
                    "StopHeading": "314",
                    "StopLat": "37.9855885",
                    "StopLng": "23.7326812",
                    "RouteStopOrder": "12",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "10175",
                    "StopID": "18",
                    "StopDescr": "ΠΛ. ΚΑΝΙΓΓΟΣ",
                    "StopDescrEng": "PL. KANNIGOS",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "140",
                    "StopLat": "37.98566",
                    "StopLng": "23.73113",
                    "RouteStopOrder": "13",
                    "StopType": "0",
                    "StopAmea": "0"
                }
            ]
        }

        this.points['4199'] = {
            "details": [
                {
                    "routed_x": "23.73153",
                    "routed_y": "37.98545",
                    "routed_order": "1"
                },
                {
                    "routed_x": "23.73147",
                    "routed_y": "37.98522",
                    "routed_order": "2"
                },
                {
                    "routed_x": "23.73144",
                    "routed_y": "37.98513",
                    "routed_order": "3"
                },
                {
                    "routed_x": "23.73231",
                    "routed_y": "37.98409",
                    "routed_order": "4"
                },
                {
                    "routed_x": "23.73323",
                    "routed_y": "37.98283",
                    "routed_order": "5"
                },
                {
                    "routed_x": "23.73352",
                    "routed_y": "37.98303",
                    "routed_order": "6"
                },
                {
                    "routed_x": "23.73433",
                    "routed_y": "37.98348",
                    "routed_order": "7"
                },
                {
                    "routed_x": "23.73501",
                    "routed_y": "37.98382",
                    "routed_order": "8"
                },
                {
                    "routed_x": "23.73633",
                    "routed_y": "37.9845",
                    "routed_order": "9"
                },
                {
                    "routed_x": "23.738",
                    "routed_y": "37.98537",
                    "routed_order": "10"
                },
                {
                    "routed_x": "23.73947",
                    "routed_y": "37.98613",
                    "routed_order": "11"
                },
                {
                    "routed_x": "23.74093",
                    "routed_y": "37.98688",
                    "routed_order": "12"
                },
                {
                    "routed_x": "23.74236",
                    "routed_y": "37.98759",
                    "routed_order": "13"
                },
                {
                    "routed_x": "23.74324",
                    "routed_y": "37.98807",
                    "routed_order": "14"
                },
                {
                    "routed_x": "23.74464",
                    "routed_y": "37.98878",
                    "routed_order": "15"
                },
                {
                    "routed_x": "23.74531",
                    "routed_y": "37.98917",
                    "routed_order": "16"
                },
                {
                    "routed_x": "23.74566",
                    "routed_y": "37.98938",
                    "routed_order": "17"
                },
                {
                    "routed_x": "23.74584",
                    "routed_y": "37.98955",
                    "routed_order": "18"
                },
                {
                    "routed_x": "23.74594",
                    "routed_y": "37.98998",
                    "routed_order": "19"
                },
                {
                    "routed_x": "23.74607",
                    "routed_y": "37.99047",
                    "routed_order": "20"
                },
                {
                    "routed_x": "23.7462",
                    "routed_y": "37.99102",
                    "routed_order": "21"
                },
                {
                    "routed_x": "23.74784",
                    "routed_y": "37.99072",
                    "routed_order": "22"
                },
                {
                    "routed_x": "23.74829",
                    "routed_y": "37.99062",
                    "routed_order": "23"
                },
                {
                    "routed_x": "23.74874",
                    "routed_y": "37.99202",
                    "routed_order": "24"
                },
                {
                    "routed_x": "23.749",
                    "routed_y": "37.99278",
                    "routed_order": "25"
                },
                {
                    "routed_x": "23.74991",
                    "routed_y": "37.99334",
                    "routed_order": "26"
                }
            ],
            "stops": [
                {
                    "StopCode": "10175",
                    "StopID": "18",
                    "StopDescr": "ΠΛ. ΚΑΝΙΓΓΟΣ",
                    "StopDescrEng": "PL. KANNIGOS",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "140",
                    "StopLat": "37.98566",
                    "StopLng": "23.73113",
                    "RouteStopOrder": "1",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60010",
                    "StopID": "060010",
                    "StopDescr": "ΝΑΥΑΡΙΝΟΥ",
                    "StopDescrEng": "NAYARINOY",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "63",
                    "StopLat": "37.9837048",
                    "StopLng": "23.7349122",
                    "RouteStopOrder": "2",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60011",
                    "StopID": "060011",
                    "StopDescr": "ΑΡΑΧΩΒΗΣ",
                    "StopDescrEng": "ARAXOBHS",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "66",
                    "StopLat": "37.9849398",
                    "StopLng": "23.7374186",
                    "RouteStopOrder": "3",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60012",
                    "StopID": "060012",
                    "StopDescr": "ΚΑΛΛΙΔΡΟΜΙΟΥ",
                    "StopDescrEng": "KALLIDROMIOY",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "67",
                    "StopLat": "37.985911",
                    "StopLng": "23.7392359",
                    "RouteStopOrder": "4",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60013",
                    "StopID": "060013",
                    "StopDescr": "ΤΣΙΜΙΣΚΗ",
                    "StopDescrEng": "TSIMISKH",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "59",
                    "StopLat": "37.9869527",
                    "StopLng": "23.7411863",
                    "RouteStopOrder": "5",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60014",
                    "StopID": "060014",
                    "StopDescr": "ΛΑΣΚΑΡΕΩΣ",
                    "StopDescrEng": "LASKAREOS",
                    "StopStreet": "ΧΑΡ.ΤΡΙΚΟΥΠΗ",
                    "StopStreetEng": null,
                    "StopHeading": "52",
                    "StopLat": "37.9884026",
                    "StopLng": "23.7439909",
                    "RouteStopOrder": "6",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60017",
                    "StopID": "060017",
                    "StopDescr": "ΑΓ. ΕΛΕΥΘΕΡΙΟΣ",
                    "StopDescrEng": "AG. ELEYTHERIOS",
                    "StopStreet": "ΜΟΜΦΕΡΑΤΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "39",
                    "StopLat": "37.9909293",
                    "StopLng": "23.7465462",
                    "RouteStopOrder": "7",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60018",
                    "StopID": "060018",
                    "StopDescr": "ΜΟΜΦΕΡΑΤΟΥ",
                    "StopDescrEng": "MOMFERATOY",
                    "StopStreet": "ΜΟΜΦΕΡΑΤΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "98",
                    "StopLat": "37.9906755",
                    "StopLng": "23.7479147",
                    "RouteStopOrder": "8",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60019",
                    "StopID": "060019",
                    "StopDescr": "ΣΚΑΛΑΚΙΑ",
                    "StopDescrEng": "SKALAKIA",
                    "StopStreet": "ΓΚΥΖΗ",
                    "StopStreetEng": null,
                    "StopHeading": "16",
                    "StopLat": "37.9924673",
                    "StopLng": "23.7489433",
                    "RouteStopOrder": "9",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "10176",
                    "StopID": "19",
                    "StopDescr": "ΠΛ. ΓΚΥΖΗ",
                    "StopDescrEng": "PL. GYZH",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "51",
                    "StopLat": "37.9933216",
                    "StopLng": "23.7493223",
                    "RouteStopOrder": "10",
                    "StopType": "0",
                    "StopAmea": "0"
                }
            ]
        }

        this.points['3494'] = {
            "details": [
                {
                    "routed_x": "23.73415",
                    "routed_y": "37.97955",
                    "routed_order": "1"
                },
                {
                    "routed_x": "23.73381",
                    "routed_y": "37.97935",
                    "routed_order": "2"
                },
                {
                    "routed_x": "23.72993",
                    "routed_y": "37.98381",
                    "routed_order": "3"
                },
                {
                    "routed_x": "23.72869",
                    "routed_y": "37.98405",
                    "routed_order": "4"
                },
                {
                    "routed_x": "23.72816",
                    "routed_y": "37.98453",
                    "routed_order": "5"
                },
                {
                    "routed_x": "23.7295",
                    "routed_y": "37.9901",
                    "routed_order": "6"
                },
                {
                    "routed_x": "23.72968",
                    "routed_y": "37.99013",
                    "routed_order": "7"
                },
                {
                    "routed_x": "23.73033",
                    "routed_y": "37.99005",
                    "routed_order": "8"
                },
                {
                    "routed_x": "23.73047",
                    "routed_y": "37.99005",
                    "routed_order": "9"
                },
                {
                    "routed_x": "23.73184",
                    "routed_y": "37.98988",
                    "routed_order": "10"
                },
                {
                    "routed_x": "23.73214",
                    "routed_y": "37.99104",
                    "routed_order": "11"
                },
                {
                    "routed_x": "23.73272",
                    "routed_y": "37.99287",
                    "routed_order": "12"
                },
                {
                    "routed_x": "23.7332",
                    "routed_y": "37.99494",
                    "routed_order": "13"
                },
                {
                    "routed_x": "23.73337",
                    "routed_y": "37.99531",
                    "routed_order": "14"
                },
                {
                    "routed_x": "23.73352",
                    "routed_y": "37.99536",
                    "routed_order": "15"
                },
                {
                    "routed_x": "23.73396",
                    "routed_y": "37.99534",
                    "routed_order": "16"
                },
                {
                    "routed_x": "23.73524",
                    "routed_y": "37.99622",
                    "routed_order": "17"
                },
                {
                    "routed_x": "23.73765",
                    "routed_y": "37.99793",
                    "routed_order": "18"
                },
                {
                    "routed_x": "23.73789",
                    "routed_y": "37.99813",
                    "routed_order": "19"
                },
                {
                    "routed_x": "23.73797",
                    "routed_y": "37.99826",
                    "routed_order": "20"
                },
                {
                    "routed_x": "23.7381",
                    "routed_y": "37.99844",
                    "routed_order": "21"
                },
                {
                    "routed_x": "23.7385",
                    "routed_y": "37.99904",
                    "routed_order": "22"
                },
                {
                    "routed_x": "23.73872",
                    "routed_y": "37.99932",
                    "routed_order": "23"
                },
                {
                    "routed_x": "23.73888",
                    "routed_y": "37.99951",
                    "routed_order": "24"
                },
                {
                    "routed_x": "23.73951",
                    "routed_y": "38.00008",
                    "routed_order": "25"
                },
                {
                    "routed_x": "23.73969",
                    "routed_y": "38.00022",
                    "routed_order": "26"
                },
                {
                    "routed_x": "23.74172",
                    "routed_y": "38.00211",
                    "routed_order": "27"
                },
                {
                    "routed_x": "23.74211",
                    "routed_y": "38.00255",
                    "routed_order": "28"
                },
                {
                    "routed_x": "23.74235",
                    "routed_y": "38.00272",
                    "routed_order": "29"
                },
                {
                    "routed_x": "23.7437",
                    "routed_y": "38.00222",
                    "routed_order": "30"
                },
                {
                    "routed_x": "23.74504",
                    "routed_y": "38.00131",
                    "routed_order": "31"
                },
                {
                    "routed_x": "23.74594",
                    "routed_y": "38.00122",
                    "routed_order": "32"
                },
                {
                    "routed_x": "23.74603",
                    "routed_y": "38.00128",
                    "routed_order": "33"
                },
                {
                    "routed_x": "23.74583",
                    "routed_y": "38.00146",
                    "routed_order": "34"
                },
                {
                    "routed_x": "23.7457",
                    "routed_y": "38.00159",
                    "routed_order": "35"
                },
                {
                    "routed_x": "23.7455",
                    "routed_y": "38.00185",
                    "routed_order": "36"
                },
                {
                    "routed_x": "23.74537",
                    "routed_y": "38.00214",
                    "routed_order": "37"
                },
                {
                    "routed_x": "23.7452",
                    "routed_y": "38.00225",
                    "routed_order": "38"
                },
                {
                    "routed_x": "23.74493",
                    "routed_y": "38.00271",
                    "routed_order": "39"
                },
                {
                    "routed_x": "23.74477",
                    "routed_y": "38.00289",
                    "routed_order": "40"
                },
                {
                    "routed_x": "23.74297",
                    "routed_y": "38.00276",
                    "routed_order": "41"
                },
                {
                    "routed_x": "23.74196",
                    "routed_y": "38.00284",
                    "routed_order": "42"
                },
                {
                    "routed_x": "23.74145",
                    "routed_y": "38.00319",
                    "routed_order": "43"
                },
                {
                    "routed_x": "23.74124",
                    "routed_y": "38.00321",
                    "routed_order": "44"
                },
                {
                    "routed_x": "23.74102",
                    "routed_y": "38.00301",
                    "routed_order": "45"
                },
                {
                    "routed_x": "23.74091",
                    "routed_y": "38.00285",
                    "routed_order": "46"
                },
                {
                    "routed_x": "23.74094",
                    "routed_y": "38.00277",
                    "routed_order": "47"
                },
                {
                    "routed_x": "23.74166",
                    "routed_y": "38.00216",
                    "routed_order": "48"
                },
                {
                    "routed_x": "23.74162",
                    "routed_y": "38.00204",
                    "routed_order": "49"
                },
                {
                    "routed_x": "23.74011",
                    "routed_y": "38.00066",
                    "routed_order": "50"
                },
                {
                    "routed_x": "23.73976",
                    "routed_y": "38.00034",
                    "routed_order": "51"
                },
                {
                    "routed_x": "23.73911",
                    "routed_y": "37.99977",
                    "routed_order": "52"
                },
                {
                    "routed_x": "23.73882",
                    "routed_y": "37.9995",
                    "routed_order": "53"
                },
                {
                    "routed_x": "23.73844",
                    "routed_y": "37.99902",
                    "routed_order": "54"
                },
                {
                    "routed_x": "23.73823",
                    "routed_y": "37.99866",
                    "routed_order": "55"
                },
                {
                    "routed_x": "23.73802",
                    "routed_y": "37.99837",
                    "routed_order": "56"
                },
                {
                    "routed_x": "23.73784",
                    "routed_y": "37.99813",
                    "routed_order": "57"
                },
                {
                    "routed_x": "23.73722",
                    "routed_y": "37.99769",
                    "routed_order": "58"
                },
                {
                    "routed_x": "23.73687",
                    "routed_y": "37.99745",
                    "routed_order": "59"
                },
                {
                    "routed_x": "23.73673",
                    "routed_y": "37.99733",
                    "routed_order": "60"
                },
                {
                    "routed_x": "23.73612",
                    "routed_y": "37.99689",
                    "routed_order": "61"
                },
                {
                    "routed_x": "23.73546",
                    "routed_y": "37.99643",
                    "routed_order": "62"
                },
                {
                    "routed_x": "23.73507",
                    "routed_y": "37.99615",
                    "routed_order": "63"
                },
                {
                    "routed_x": "23.73408",
                    "routed_y": "37.99545",
                    "routed_order": "64"
                },
                {
                    "routed_x": "23.73395",
                    "routed_y": "37.99537",
                    "routed_order": "65"
                },
                {
                    "routed_x": "23.73227",
                    "routed_y": "37.99564",
                    "routed_order": "66"
                },
                {
                    "routed_x": "23.7322",
                    "routed_y": "37.99556",
                    "routed_order": "67"
                },
                {
                    "routed_x": "23.73211",
                    "routed_y": "37.99534",
                    "routed_order": "68"
                },
                {
                    "routed_x": "23.73153",
                    "routed_y": "37.9928",
                    "routed_order": "69"
                },
                {
                    "routed_x": "23.73039",
                    "routed_y": "37.98838",
                    "routed_order": "70"
                },
                {
                    "routed_x": "23.73023",
                    "routed_y": "37.98763",
                    "routed_order": "71"
                },
                {
                    "routed_x": "23.72994",
                    "routed_y": "37.98634",
                    "routed_order": "72"
                },
                {
                    "routed_x": "23.72988",
                    "routed_y": "37.98605",
                    "routed_order": "73"
                },
                {
                    "routed_x": "23.73009",
                    "routed_y": "37.98589",
                    "routed_order": "74"
                },
                {
                    "routed_x": "23.73074",
                    "routed_y": "37.98577",
                    "routed_order": "75"
                },
                {
                    "routed_x": "23.73152",
                    "routed_y": "37.98501",
                    "routed_order": "76"
                },
                {
                    "routed_x": "23.73157",
                    "routed_y": "37.98492",
                    "routed_order": "77"
                },
                {
                    "routed_x": "23.73539",
                    "routed_y": "37.98026",
                    "routed_order": "78"
                },
                {
                    "routed_x": "23.7346",
                    "routed_y": "37.9798",
                    "routed_order": "79"
                }
            ],
            "stops": [
                {
                    "StopCode": "10292",
                    "StopID": "91",
                    "StopDescr": "ΑΦΕΤΗΡΙΑ - ΣΙΝΑ",
                    "StopDescrEng": "AFETHRIA - SINA",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "236",
                    "StopLat": "37.9798095",
                    "StopLng": "23.734568",
                    "RouteStopOrder": "1",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61000",
                    "StopID": "061000",
                    "StopDescr": "ΑΚΑΔΗΜΙΑ",
                    "StopDescrEng": "AKADHMIA",
                    "StopStreet": "ΠΑΝΕΠΙΣΤΗΜΙΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "324",
                    "StopLat": "37.9798734",
                    "StopLng": "23.7335091",
                    "RouteStopOrder": "2",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60116",
                    "StopID": "060116",
                    "StopDescr": "ΡΕΞ",
                    "StopDescrEng": "REX",
                    "StopStreet": "ΠΑΝΕΠΙΣΤΗΜΙΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "327",
                    "StopLat": "37.982726",
                    "StopLng": "23.7310565",
                    "RouteStopOrder": "3",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60118",
                    "StopID": "060118",
                    "StopDescr": "ΠΛ. ΛΑΥΡΙΟΥ",
                    "StopDescrEng": "PL. LAYRIOY",
                    "StopStreet": "3ης ΣΕΠΤΕΜΒΡΙΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "8",
                    "StopLat": "37.9858267",
                    "StopLng": "23.7285925",
                    "RouteStopOrder": "4",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60065",
                    "StopID": "060065",
                    "StopDescr": "ΠΑΤΗΣΙΩΝ",
                    "StopDescrEng": "PATHSION",
                    "StopStreet": "ΗΠΕΙΡΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "101",
                    "StopLat": "37.9900089",
                    "StopLng": "23.73032",
                    "RouteStopOrder": "5",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60066",
                    "StopID": "060066",
                    "StopDescr": "ΑΙΓΥΠΤΟΥ",
                    "StopDescrEng": "AIGYPTOY",
                    "StopStreet": "ΜΑΥΡΟΜΜΑΤΑΙΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "12",
                    "StopLat": "37.9910421",
                    "StopLng": "23.7322183",
                    "RouteStopOrder": "6",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60550",
                    "StopID": "060550",
                    "StopDescr": "ΠΑΝΕΛΛΗΝΙΟΣ",
                    "StopDescrEng": "PANELLHNIOS",
                    "StopStreet": "ΜΑΥΡΟΜΜΑΤΑΙΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "14",
                    "StopLat": "37.9941861",
                    "StopLng": "23.733133",
                    "RouteStopOrder": "7",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60551",
                    "StopID": "060551",
                    "StopDescr": "ΕΠΤΑΝΗΣΟΥ",
                    "StopDescrEng": "EPTANHSOY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "54",
                    "StopLat": "37.9961709",
                    "StopLng": "23.7352559",
                    "RouteStopOrder": "8",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60552",
                    "StopID": "060552",
                    "StopDescr": "ΙΘΑΚΗΣ",
                    "StopDescrEng": "ITHAKHS",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "54",
                    "StopLat": "37.9976955",
                    "StopLng": "23.7373941",
                    "RouteStopOrder": "9",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60553",
                    "StopID": "060553",
                    "StopDescr": "ΖΑΚΥΝΘΟΥ",
                    "StopDescrEng": "ZAKYNTHOY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "47",
                    "StopLat": "37.9994663",
                    "StopLng": "23.7389319",
                    "RouteStopOrder": "10",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60554",
                    "StopID": "060554",
                    "StopDescr": "ΣΚΥΡΟΥ",
                    "StopDescrEng": "SKYROY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "47",
                    "StopLat": "38.0010166",
                    "StopLng": "23.7406598",
                    "RouteStopOrder": "11",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60555",
                    "StopID": "060555",
                    "StopDescr": "ΠΛ  ΚΥΨΕΛΗΣ (ΤΕΡΜΑ 036)",
                    "StopDescrEng": "PL. KYPSELHS (TERMA 036)",
                    "StopStreet": "ΠΛ.ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "47",
                    "StopLat": "38.0023813",
                    "StopLng": "23.7420444",
                    "RouteStopOrder": "12",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60556",
                    "StopID": "060556",
                    "StopDescr": "ΦΙΛΟΤΙΜΟΥ",
                    "StopDescrEng": "FILOTIMOY",
                    "StopStreet": "ΦΙΛΟΤΙΜΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "112",
                    "StopLat": "38.0020239",
                    "StopLng": "23.7437771",
                    "RouteStopOrder": "13",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60557",
                    "StopID": "060557",
                    "StopDescr": "ΝΕΑ  ΚΥΨΕΛΗ",
                    "StopDescrEng": "NΕΑ  KYPSELH",
                    "StopStreet": "ΛΑΖΑΡΑΔΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "-1",
                    "StopLat": "38.0014969",
                    "StopLng": "23.7459658",
                    "RouteStopOrder": "14",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60558",
                    "StopID": "060558",
                    "StopDescr": "ΚΟΛΟΣΣΑΙΟΝ",
                    "StopDescrEng": "KOLOSSAION",
                    "StopStreet": "ΒΕΛΒΕΝΔΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "264",
                    "StopLat": "38.0029801",
                    "StopLng": "23.7441838",
                    "RouteStopOrder": "15",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61360",
                    "StopID": "061360",
                    "StopDescr": "ΠΛ. ΚΥΨΕΛΗΣ",
                    "StopDescrEng": "PL. KYPSELHS",
                    "StopStreet": "ΠΛ.ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "168",
                    "StopLat": "38.0022567",
                    "StopLng": "23.7415338",
                    "RouteStopOrder": "16",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60560",
                    "StopID": "060560",
                    "StopDescr": "ΣΚΥΡΟΥ",
                    "StopDescrEng": "SKYROY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "218",
                    "StopLat": "38.0006996",
                    "StopLng": "23.7399433",
                    "RouteStopOrder": "17",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60561",
                    "StopID": "060561",
                    "StopDescr": "ΖΑΚΥΝΘΟΥ",
                    "StopDescrEng": "ZAKYNTHOY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "226",
                    "StopLat": "37.9993175",
                    "StopLng": "23.7385017",
                    "RouteStopOrder": "18",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60562",
                    "StopID": "060562",
                    "StopDescr": "ΙΘΑΚΗΣ",
                    "StopDescrEng": "ITHAKHS",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "226",
                    "StopLat": "37.9978366",
                    "StopLng": "23.7372541",
                    "RouteStopOrder": "19",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60563",
                    "StopID": "060563",
                    "StopDescr": "ΕΠΤΑΝΗΣΟΥ",
                    "StopDescrEng": "EPTANHSOY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "228",
                    "StopLat": "37.996173",
                    "StopLng": "23.7350393",
                    "RouteStopOrder": "20",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60565",
                    "StopID": "060565",
                    "StopDescr": "ΟΤΕ ΠΕΔΙΟΥ ΑΡΕΩΣ",
                    "StopDescrEng": "OTE PEDIOY AREOS",
                    "StopStreet": "ΠΑΤΗΣΙΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "193",
                    "StopLat": "37.9933931",
                    "StopLng": "23.7315751",
                    "RouteStopOrder": "21",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61011",
                    "StopID": "061011",
                    "StopDescr": "ΠΟΛΥΤΕΧΝΕΙΟ",
                    "StopDescrEng": "POLYTEXNEIO",
                    "StopStreet": "ΠΑΤΗΣΙΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "196",
                    "StopLat": "37.9884693",
                    "StopLng": "23.7303264",
                    "RouteStopOrder": "22",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60985",
                    "StopID": "060985",
                    "StopDescr": "ΠΛ. ΚΑΝΙΓΓΟΣ",
                    "StopDescrEng": "PL. KANIGGOS",
                    "StopStreet": "ΠΛ.ΚΑΝΙΓΓΟΣ",
                    "StopStreetEng": null,
                    "StopHeading": "129",
                    "StopLat": "37.9854204",
                    "StopLng": "23.7310317",
                    "RouteStopOrder": "23",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60008",
                    "StopID": "060008",
                    "StopDescr": "ΖΩΟΔ.ΠΗΓΗ",
                    "StopDescrEng": "ZOOD. PHGH",
                    "StopStreet": "ΑΚΑΔΗΜΙΑΣ",
                    "StopStreetEng": null,
                    "StopHeading": "139",
                    "StopLat": "37.9835545",
                    "StopLng": "23.7325977",
                    "RouteStopOrder": "24",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60580",
                    "StopID": "060580",
                    "StopDescr": "ΑΦΕΤΗΡΙΑ - ΑΚΑΔΗΜΙΑ",
                    "StopDescrEng": "AFETHRIA - AKADHMIA",
                    "StopStreet": "ΑΚΑΔΗΜΙΑΣ",
                    "StopStreetEng": null,
                    "StopHeading": "-1",
                    "StopLat": "37.9802929",
                    "StopLng": "23.7351646",
                    "RouteStopOrder": "25",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "10292",
                    "StopID": "91",
                    "StopDescr": "ΑΦΕΤΗΡΙΑ - ΣΙΝΑ",
                    "StopDescrEng": "AFETHRIA - SINA",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "236",
                    "StopLat": "37.9798095",
                    "StopLng": "23.734568",
                    "RouteStopOrder": "26",
                    "StopType": "0",
                    "StopAmea": "0"
                }
            ]
        }

        this.points['4213'] = {
            "details": [
                {
                    "routed_x": "23.74616",
                    "routed_y": "38.00112",
                    "routed_order": "1"
                },
                {
                    "routed_x": "23.74606",
                    "routed_y": "38.00124",
                    "routed_order": "2"
                },
                {
                    "routed_x": "23.74584",
                    "routed_y": "38.00145",
                    "routed_order": "3"
                },
                {
                    "routed_x": "23.7455",
                    "routed_y": "38.00185",
                    "routed_order": "4"
                },
                {
                    "routed_x": "23.74537",
                    "routed_y": "38.00214",
                    "routed_order": "5"
                },
                {
                    "routed_x": "23.7452",
                    "routed_y": "38.00225",
                    "routed_order": "6"
                },
                {
                    "routed_x": "23.74493",
                    "routed_y": "38.00271",
                    "routed_order": "7"
                },
                {
                    "routed_x": "23.74477",
                    "routed_y": "38.00289",
                    "routed_order": "8"
                },
                {
                    "routed_x": "23.74297",
                    "routed_y": "38.00276",
                    "routed_order": "9"
                },
                {
                    "routed_x": "23.74196",
                    "routed_y": "38.00284",
                    "routed_order": "10"
                },
                {
                    "routed_x": "23.74145",
                    "routed_y": "38.00319",
                    "routed_order": "11"
                },
                {
                    "routed_x": "23.74124",
                    "routed_y": "38.00321",
                    "routed_order": "12"
                },
                {
                    "routed_x": "23.74102",
                    "routed_y": "38.00301",
                    "routed_order": "13"
                },
                {
                    "routed_x": "23.74091",
                    "routed_y": "38.00285",
                    "routed_order": "14"
                },
                {
                    "routed_x": "23.74094",
                    "routed_y": "38.00277",
                    "routed_order": "15"
                },
                {
                    "routed_x": "23.74166",
                    "routed_y": "38.00216",
                    "routed_order": "16"
                },
                {
                    "routed_x": "23.74162",
                    "routed_y": "38.00204",
                    "routed_order": "17"
                },
                {
                    "routed_x": "23.74011",
                    "routed_y": "38.00066",
                    "routed_order": "18"
                },
                {
                    "routed_x": "23.73976",
                    "routed_y": "38.00034",
                    "routed_order": "19"
                },
                {
                    "routed_x": "23.73911",
                    "routed_y": "37.99977",
                    "routed_order": "20"
                },
                {
                    "routed_x": "23.73882",
                    "routed_y": "37.9995",
                    "routed_order": "21"
                },
                {
                    "routed_x": "23.73844",
                    "routed_y": "37.99902",
                    "routed_order": "22"
                },
                {
                    "routed_x": "23.73823",
                    "routed_y": "37.99866",
                    "routed_order": "23"
                },
                {
                    "routed_x": "23.73802",
                    "routed_y": "37.99837",
                    "routed_order": "24"
                },
                {
                    "routed_x": "23.73784",
                    "routed_y": "37.99813",
                    "routed_order": "25"
                },
                {
                    "routed_x": "23.73722",
                    "routed_y": "37.99769",
                    "routed_order": "26"
                },
                {
                    "routed_x": "23.73687",
                    "routed_y": "37.99745",
                    "routed_order": "27"
                },
                {
                    "routed_x": "23.73673",
                    "routed_y": "37.99733",
                    "routed_order": "28"
                },
                {
                    "routed_x": "23.73612",
                    "routed_y": "37.99689",
                    "routed_order": "29"
                },
                {
                    "routed_x": "23.73546",
                    "routed_y": "37.99643",
                    "routed_order": "30"
                },
                {
                    "routed_x": "23.73507",
                    "routed_y": "37.99615",
                    "routed_order": "31"
                },
                {
                    "routed_x": "23.73408",
                    "routed_y": "37.99545",
                    "routed_order": "32"
                },
                {
                    "routed_x": "23.73395",
                    "routed_y": "37.99537",
                    "routed_order": "33"
                },
                {
                    "routed_x": "23.73227",
                    "routed_y": "37.99564",
                    "routed_order": "34"
                },
                {
                    "routed_x": "23.7322",
                    "routed_y": "37.99556",
                    "routed_order": "35"
                },
                {
                    "routed_x": "23.73211",
                    "routed_y": "37.99534",
                    "routed_order": "36"
                },
                {
                    "routed_x": "23.73153",
                    "routed_y": "37.9928",
                    "routed_order": "37"
                },
                {
                    "routed_x": "23.73039",
                    "routed_y": "37.98838",
                    "routed_order": "38"
                },
                {
                    "routed_x": "23.73023",
                    "routed_y": "37.98763",
                    "routed_order": "39"
                },
                {
                    "routed_x": "23.72994",
                    "routed_y": "37.98634",
                    "routed_order": "40"
                },
                {
                    "routed_x": "23.72988",
                    "routed_y": "37.98605",
                    "routed_order": "41"
                },
                {
                    "routed_x": "23.73009",
                    "routed_y": "37.98589",
                    "routed_order": "42"
                },
                {
                    "routed_x": "23.73074",
                    "routed_y": "37.98577",
                    "routed_order": "43"
                },
                {
                    "routed_x": "23.73152",
                    "routed_y": "37.98501",
                    "routed_order": "44"
                },
                {
                    "routed_x": "23.73157",
                    "routed_y": "37.98492",
                    "routed_order": "45"
                },
                {
                    "routed_x": "23.73539",
                    "routed_y": "37.98026",
                    "routed_order": "46"
                },
                {
                    "routed_x": "23.73482",
                    "routed_y": "37.97997",
                    "routed_order": "47"
                },
                {
                    "routed_x": "23.73429",
                    "routed_y": "37.97966",
                    "routed_order": "48"
                }
            ],
            "stops": [
                {
                    "StopCode": "10186",
                    "StopID": "27",
                    "StopDescr": "Ν. ΚΥΨΕΛΗ",
                    "StopDescrEng": "N. KYPSELH",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "96",
                    "StopLat": "38.0014215",
                    "StopLng": "23.746045",
                    "RouteStopOrder": "1",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60558",
                    "StopID": "060558",
                    "StopDescr": "ΚΟΛΟΣΣΑΙΟΝ",
                    "StopDescrEng": "KOLOSSAION",
                    "StopStreet": "ΒΕΛΒΕΝΔΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "264",
                    "StopLat": "38.0029801",
                    "StopLng": "23.7441838",
                    "RouteStopOrder": "2",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61360",
                    "StopID": "061360",
                    "StopDescr": "ΠΛ. ΚΥΨΕΛΗΣ",
                    "StopDescrEng": "PL. KYPSELHS",
                    "StopStreet": "ΠΛ.ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "168",
                    "StopLat": "38.0022567",
                    "StopLng": "23.7415338",
                    "RouteStopOrder": "3",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60560",
                    "StopID": "060560",
                    "StopDescr": "ΣΚΥΡΟΥ",
                    "StopDescrEng": "SKYROY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "218",
                    "StopLat": "38.0006996",
                    "StopLng": "23.7399433",
                    "RouteStopOrder": "4",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60561",
                    "StopID": "060561",
                    "StopDescr": "ΖΑΚΥΝΘΟΥ",
                    "StopDescrEng": "ZAKYNTHOY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "226",
                    "StopLat": "37.9993175",
                    "StopLng": "23.7385017",
                    "RouteStopOrder": "5",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60562",
                    "StopID": "060562",
                    "StopDescr": "ΙΘΑΚΗΣ",
                    "StopDescrEng": "ITHAKHS",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "226",
                    "StopLat": "37.9978366",
                    "StopLng": "23.7372541",
                    "RouteStopOrder": "6",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60563",
                    "StopID": "060563",
                    "StopDescr": "ΕΠΤΑΝΗΣΟΥ",
                    "StopDescrEng": "EPTANHSOY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "228",
                    "StopLat": "37.996173",
                    "StopLng": "23.7350393",
                    "RouteStopOrder": "7",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60565",
                    "StopID": "060565",
                    "StopDescr": "ΟΤΕ ΠΕΔΙΟΥ ΑΡΕΩΣ",
                    "StopDescrEng": "OTE PEDIOY AREOS",
                    "StopStreet": "ΠΑΤΗΣΙΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "193",
                    "StopLat": "37.9933931",
                    "StopLng": "23.7315751",
                    "RouteStopOrder": "8",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61011",
                    "StopID": "061011",
                    "StopDescr": "ΠΟΛΥΤΕΧΝΕΙΟ",
                    "StopDescrEng": "POLYTEXNEIO",
                    "StopStreet": "ΠΑΤΗΣΙΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "196",
                    "StopLat": "37.9884693",
                    "StopLng": "23.7303264",
                    "RouteStopOrder": "9",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60985",
                    "StopID": "060985",
                    "StopDescr": "ΠΛ. ΚΑΝΙΓΓΟΣ",
                    "StopDescrEng": "PL. KANIGGOS",
                    "StopStreet": "ΠΛ.ΚΑΝΙΓΓΟΣ",
                    "StopStreetEng": null,
                    "StopHeading": "129",
                    "StopLat": "37.9854204",
                    "StopLng": "23.7310317",
                    "RouteStopOrder": "10",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60008",
                    "StopID": "060008",
                    "StopDescr": "ΖΩΟΔ.ΠΗΓΗ",
                    "StopDescrEng": "ZOOD. PHGH",
                    "StopStreet": "ΑΚΑΔΗΜΙΑΣ",
                    "StopStreetEng": null,
                    "StopHeading": "139",
                    "StopLat": "37.9835545",
                    "StopLng": "23.7325977",
                    "RouteStopOrder": "11",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60580",
                    "StopID": "060580",
                    "StopDescr": "ΑΦΕΤΗΡΙΑ - ΑΚΑΔΗΜΙΑ",
                    "StopDescrEng": "AFETHRIA - AKADHMIA",
                    "StopStreet": "ΑΚΑΔΗΜΙΑΣ",
                    "StopStreetEng": null,
                    "StopHeading": "-1",
                    "StopLat": "37.9802929",
                    "StopLng": "23.7351646",
                    "RouteStopOrder": "12",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "10292",
                    "StopID": "91",
                    "StopDescr": "ΑΦΕΤΗΡΙΑ - ΣΙΝΑ",
                    "StopDescrEng": "AFETHRIA - SINA",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "236",
                    "StopLat": "37.9798095",
                    "StopLng": "23.734568",
                    "RouteStopOrder": "13",
                    "StopType": "0",
                    "StopAmea": "0"
                }
            ]
        }

        this.points['4214'] = {
            "details": [
                {
                    "routed_x": "23.73423",
                    "routed_y": "37.97961",
                    "routed_order": "1"
                },
                {
                    "routed_x": "23.73413",
                    "routed_y": "37.97956",
                    "routed_order": "2"
                },
                {
                    "routed_x": "23.73381",
                    "routed_y": "37.97935",
                    "routed_order": "3"
                },
                {
                    "routed_x": "23.72993",
                    "routed_y": "37.98381",
                    "routed_order": "4"
                },
                {
                    "routed_x": "23.72869",
                    "routed_y": "37.98405",
                    "routed_order": "5"
                },
                {
                    "routed_x": "23.72816",
                    "routed_y": "37.98453",
                    "routed_order": "6"
                },
                {
                    "routed_x": "23.7295",
                    "routed_y": "37.9901",
                    "routed_order": "7"
                },
                {
                    "routed_x": "23.72968",
                    "routed_y": "37.99013",
                    "routed_order": "8"
                },
                {
                    "routed_x": "23.73033",
                    "routed_y": "37.99005",
                    "routed_order": "9"
                },
                {
                    "routed_x": "23.73047",
                    "routed_y": "37.99005",
                    "routed_order": "10"
                },
                {
                    "routed_x": "23.73184",
                    "routed_y": "37.98988",
                    "routed_order": "11"
                },
                {
                    "routed_x": "23.73214",
                    "routed_y": "37.99104",
                    "routed_order": "12"
                },
                {
                    "routed_x": "23.73272",
                    "routed_y": "37.99287",
                    "routed_order": "13"
                },
                {
                    "routed_x": "23.7332",
                    "routed_y": "37.99494",
                    "routed_order": "14"
                },
                {
                    "routed_x": "23.73337",
                    "routed_y": "37.99531",
                    "routed_order": "15"
                },
                {
                    "routed_x": "23.73352",
                    "routed_y": "37.99536",
                    "routed_order": "16"
                },
                {
                    "routed_x": "23.73396",
                    "routed_y": "37.99534",
                    "routed_order": "17"
                },
                {
                    "routed_x": "23.73524",
                    "routed_y": "37.99622",
                    "routed_order": "18"
                },
                {
                    "routed_x": "23.73765",
                    "routed_y": "37.99793",
                    "routed_order": "19"
                },
                {
                    "routed_x": "23.73789",
                    "routed_y": "37.99813",
                    "routed_order": "20"
                },
                {
                    "routed_x": "23.73797",
                    "routed_y": "37.99826",
                    "routed_order": "21"
                },
                {
                    "routed_x": "23.7381",
                    "routed_y": "37.99844",
                    "routed_order": "22"
                },
                {
                    "routed_x": "23.7385",
                    "routed_y": "37.99904",
                    "routed_order": "23"
                },
                {
                    "routed_x": "23.73872",
                    "routed_y": "37.99932",
                    "routed_order": "24"
                },
                {
                    "routed_x": "23.73888",
                    "routed_y": "37.99951",
                    "routed_order": "25"
                },
                {
                    "routed_x": "23.73951",
                    "routed_y": "38.00008",
                    "routed_order": "26"
                },
                {
                    "routed_x": "23.73969",
                    "routed_y": "38.00022",
                    "routed_order": "27"
                },
                {
                    "routed_x": "23.74172",
                    "routed_y": "38.00211",
                    "routed_order": "28"
                },
                {
                    "routed_x": "23.74211",
                    "routed_y": "38.00255",
                    "routed_order": "29"
                },
                {
                    "routed_x": "23.74235",
                    "routed_y": "38.00272",
                    "routed_order": "30"
                },
                {
                    "routed_x": "23.7437",
                    "routed_y": "38.00222",
                    "routed_order": "31"
                },
                {
                    "routed_x": "23.74523",
                    "routed_y": "38.00118",
                    "routed_order": "32"
                },
                {
                    "routed_x": "23.74537",
                    "routed_y": "38.00129",
                    "routed_order": "33"
                },
                {
                    "routed_x": "23.74574",
                    "routed_y": "38.00124",
                    "routed_order": "34"
                },
                {
                    "routed_x": "23.74611",
                    "routed_y": "38.00121",
                    "routed_order": "35"
                }
            ],
            "stops": [
                {
                    "StopCode": "10292",
                    "StopID": "91",
                    "StopDescr": "ΑΦΕΤΗΡΙΑ - ΣΙΝΑ",
                    "StopDescrEng": "AFETHRIA - SINA",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "236",
                    "StopLat": "37.9798095",
                    "StopLng": "23.734568",
                    "RouteStopOrder": "1",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61000",
                    "StopID": "061000",
                    "StopDescr": "ΑΚΑΔΗΜΙΑ",
                    "StopDescrEng": "AKADHMIA",
                    "StopStreet": "ΠΑΝΕΠΙΣΤΗΜΙΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "324",
                    "StopLat": "37.9798734",
                    "StopLng": "23.7335091",
                    "RouteStopOrder": "2",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60116",
                    "StopID": "060116",
                    "StopDescr": "ΡΕΞ",
                    "StopDescrEng": "REX",
                    "StopStreet": "ΠΑΝΕΠΙΣΤΗΜΙΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "327",
                    "StopLat": "37.982726",
                    "StopLng": "23.7310565",
                    "RouteStopOrder": "3",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60118",
                    "StopID": "060118",
                    "StopDescr": "ΠΛ. ΛΑΥΡΙΟΥ",
                    "StopDescrEng": "PL. LAYRIOY",
                    "StopStreet": "3ης ΣΕΠΤΕΜΒΡΙΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "8",
                    "StopLat": "37.9858267",
                    "StopLng": "23.7285925",
                    "RouteStopOrder": "4",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60065",
                    "StopID": "060065",
                    "StopDescr": "ΠΑΤΗΣΙΩΝ",
                    "StopDescrEng": "PATHSION",
                    "StopStreet": "ΗΠΕΙΡΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "101",
                    "StopLat": "37.9900089",
                    "StopLng": "23.73032",
                    "RouteStopOrder": "5",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60066",
                    "StopID": "060066",
                    "StopDescr": "ΑΙΓΥΠΤΟΥ",
                    "StopDescrEng": "AIGYPTOY",
                    "StopStreet": "ΜΑΥΡΟΜΜΑΤΑΙΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "12",
                    "StopLat": "37.9910421",
                    "StopLng": "23.7322183",
                    "RouteStopOrder": "6",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60550",
                    "StopID": "060550",
                    "StopDescr": "ΠΑΝΕΛΛΗΝΙΟΣ",
                    "StopDescrEng": "PANELLHNIOS",
                    "StopStreet": "ΜΑΥΡΟΜΜΑΤΑΙΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "14",
                    "StopLat": "37.9941861",
                    "StopLng": "23.733133",
                    "RouteStopOrder": "7",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60551",
                    "StopID": "060551",
                    "StopDescr": "ΕΠΤΑΝΗΣΟΥ",
                    "StopDescrEng": "EPTANHSOY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "54",
                    "StopLat": "37.9961709",
                    "StopLng": "23.7352559",
                    "RouteStopOrder": "8",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60552",
                    "StopID": "060552",
                    "StopDescr": "ΙΘΑΚΗΣ",
                    "StopDescrEng": "ITHAKHS",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "54",
                    "StopLat": "37.9976955",
                    "StopLng": "23.7373941",
                    "RouteStopOrder": "9",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60553",
                    "StopID": "060553",
                    "StopDescr": "ΖΑΚΥΝΘΟΥ",
                    "StopDescrEng": "ZAKYNTHOY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "47",
                    "StopLat": "37.9994663",
                    "StopLng": "23.7389319",
                    "RouteStopOrder": "10",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60554",
                    "StopID": "060554",
                    "StopDescr": "ΣΚΥΡΟΥ",
                    "StopDescrEng": "SKYROY",
                    "StopStreet": "ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "47",
                    "StopLat": "38.0010166",
                    "StopLng": "23.7406598",
                    "RouteStopOrder": "11",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60555",
                    "StopID": "060555",
                    "StopDescr": "ΠΛ  ΚΥΨΕΛΗΣ (ΤΕΡΜΑ 036)",
                    "StopDescrEng": "PL. KYPSELHS (TERMA 036)",
                    "StopStreet": "ΠΛ.ΚΥΨΕΛΗΣ",
                    "StopStreetEng": null,
                    "StopHeading": "47",
                    "StopLat": "38.0023813",
                    "StopLng": "23.7420444",
                    "RouteStopOrder": "12",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60556",
                    "StopID": "060556",
                    "StopDescr": "ΦΙΛΟΤΙΜΟΥ",
                    "StopDescrEng": "FILOTIMOY",
                    "StopStreet": "ΦΙΛΟΤΙΜΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "112",
                    "StopLat": "38.0020239",
                    "StopLng": "23.7437771",
                    "RouteStopOrder": "13",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "10186",
                    "StopID": "27",
                    "StopDescr": "Ν. ΚΥΨΕΛΗ",
                    "StopDescrEng": "N. KYPSELH",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "96",
                    "StopLat": "38.0014215",
                    "StopLng": "23.746045",
                    "RouteStopOrder": "14",
                    "StopType": "0",
                    "StopAmea": "0"
                }
            ]
        }

        this.points['2640'] = {
            "details": [
                {
                    "routed_x": "23.73452",
                    "routed_y": "38.04764",
                    "routed_order": "1"
                },
                {
                    "routed_x": "23.73454",
                    "routed_y": "38.04749",
                    "routed_order": "2"
                },
                {
                    "routed_x": "23.73394",
                    "routed_y": "38.04614",
                    "routed_order": "3"
                },
                {
                    "routed_x": "23.73356",
                    "routed_y": "38.04523",
                    "routed_order": "4"
                },
                {
                    "routed_x": "23.73458",
                    "routed_y": "38.04489",
                    "routed_order": "5"
                },
                {
                    "routed_x": "23.73425",
                    "routed_y": "38.04405",
                    "routed_order": "6"
                },
                {
                    "routed_x": "23.73434",
                    "routed_y": "38.04388",
                    "routed_order": "7"
                },
                {
                    "routed_x": "23.73415",
                    "routed_y": "38.04307",
                    "routed_order": "8"
                },
                {
                    "routed_x": "23.73365",
                    "routed_y": "38.03962",
                    "routed_order": "9"
                },
                {
                    "routed_x": "23.73172",
                    "routed_y": "38.03683",
                    "routed_order": "10"
                },
                {
                    "routed_x": "23.73038",
                    "routed_y": "38.03548",
                    "routed_order": "11"
                },
                {
                    "routed_x": "23.73006",
                    "routed_y": "38.03487",
                    "routed_order": "12"
                },
                {
                    "routed_x": "23.72903",
                    "routed_y": "38.03181",
                    "routed_order": "13"
                },
                {
                    "routed_x": "23.72802",
                    "routed_y": "38.03034",
                    "routed_order": "14"
                },
                {
                    "routed_x": "23.72741",
                    "routed_y": "38.02918",
                    "routed_order": "15"
                },
                {
                    "routed_x": "23.72697",
                    "routed_y": "38.02807",
                    "routed_order": "16"
                },
                {
                    "routed_x": "23.72666",
                    "routed_y": "38.02732",
                    "routed_order": "17"
                },
                {
                    "routed_x": "23.72621",
                    "routed_y": "38.02637",
                    "routed_order": "18"
                },
                {
                    "routed_x": "23.72543",
                    "routed_y": "38.02512",
                    "routed_order": "19"
                },
                {
                    "routed_x": "23.72505",
                    "routed_y": "38.02438",
                    "routed_order": "20"
                },
                {
                    "routed_x": "23.72481",
                    "routed_y": "38.024",
                    "routed_order": "21"
                },
                {
                    "routed_x": "23.725",
                    "routed_y": "38.02393",
                    "routed_order": "22"
                },
                {
                    "routed_x": "23.72514",
                    "routed_y": "38.02391",
                    "routed_order": "23"
                },
                {
                    "routed_x": "23.7252",
                    "routed_y": "38.02367",
                    "routed_order": "24"
                },
                {
                    "routed_x": "23.72495",
                    "routed_y": "38.02275",
                    "routed_order": "25"
                },
                {
                    "routed_x": "23.72553",
                    "routed_y": "38.02248",
                    "routed_order": "26"
                },
                {
                    "routed_x": "23.72764",
                    "routed_y": "38.02158",
                    "routed_order": "27"
                },
                {
                    "routed_x": "23.72955",
                    "routed_y": "38.02092",
                    "routed_order": "28"
                },
                {
                    "routed_x": "23.72831",
                    "routed_y": "38.01773",
                    "routed_order": "29"
                },
                {
                    "routed_x": "23.72818",
                    "routed_y": "38.0174",
                    "routed_order": "30"
                },
                {
                    "routed_x": "23.72821",
                    "routed_y": "38.017",
                    "routed_order": "31"
                },
                {
                    "routed_x": "23.72818",
                    "routed_y": "38.01687",
                    "routed_order": "32"
                },
                {
                    "routed_x": "23.72794",
                    "routed_y": "38.01676",
                    "routed_order": "33"
                },
                {
                    "routed_x": "23.72697",
                    "routed_y": "38.01693",
                    "routed_order": "34"
                },
                {
                    "routed_x": "23.72604",
                    "routed_y": "38.01704",
                    "routed_order": "35"
                },
                {
                    "routed_x": "23.72514",
                    "routed_y": "38.01723",
                    "routed_order": "36"
                },
                {
                    "routed_x": "23.72413",
                    "routed_y": "38.01749",
                    "routed_order": "37"
                },
                {
                    "routed_x": "23.72267",
                    "routed_y": "38.01575",
                    "routed_order": "38"
                },
                {
                    "routed_x": "23.72196",
                    "routed_y": "38.01498",
                    "routed_order": "39"
                },
                {
                    "routed_x": "23.72211",
                    "routed_y": "38.01498",
                    "routed_order": "40"
                },
                {
                    "routed_x": "23.72432",
                    "routed_y": "38.01494",
                    "routed_order": "41"
                },
                {
                    "routed_x": "23.72624",
                    "routed_y": "38.01487",
                    "routed_order": "42"
                },
                {
                    "routed_x": "23.72841",
                    "routed_y": "38.01481",
                    "routed_order": "43"
                },
                {
                    "routed_x": "23.7285",
                    "routed_y": "38.01371",
                    "routed_order": "44"
                },
                {
                    "routed_x": "23.72865",
                    "routed_y": "38.01223",
                    "routed_order": "45"
                },
                {
                    "routed_x": "23.72555",
                    "routed_y": "38.01262",
                    "routed_order": "46"
                },
                {
                    "routed_x": "23.72461",
                    "routed_y": "38.01275",
                    "routed_order": "47"
                },
                {
                    "routed_x": "23.72288",
                    "routed_y": "38.01318",
                    "routed_order": "48"
                },
                {
                    "routed_x": "23.72087",
                    "routed_y": "38.01366",
                    "routed_order": "49"
                },
                {
                    "routed_x": "23.72004",
                    "routed_y": "38.01393",
                    "routed_order": "50"
                },
                {
                    "routed_x": "23.72049",
                    "routed_y": "38.01492",
                    "routed_order": "51"
                },
                {
                    "routed_x": "23.72199",
                    "routed_y": "38.01495",
                    "routed_order": "52"
                },
                {
                    "routed_x": "23.7225",
                    "routed_y": "38.0155",
                    "routed_order": "53"
                },
                {
                    "routed_x": "23.72296",
                    "routed_y": "38.01604",
                    "routed_order": "54"
                },
                {
                    "routed_x": "23.72352",
                    "routed_y": "38.01671",
                    "routed_order": "55"
                },
                {
                    "routed_x": "23.72415",
                    "routed_y": "38.01742",
                    "routed_order": "56"
                },
                {
                    "routed_x": "23.72516",
                    "routed_y": "38.01717",
                    "routed_order": "57"
                },
                {
                    "routed_x": "23.72611",
                    "routed_y": "38.01696",
                    "routed_order": "58"
                },
                {
                    "routed_x": "23.72708",
                    "routed_y": "38.01685",
                    "routed_order": "59"
                },
                {
                    "routed_x": "23.7281",
                    "routed_y": "38.01664",
                    "routed_order": "60"
                },
                {
                    "routed_x": "23.72832",
                    "routed_y": "38.01671",
                    "routed_order": "61"
                },
                {
                    "routed_x": "23.72827",
                    "routed_y": "38.01731",
                    "routed_order": "62"
                },
                {
                    "routed_x": "23.72852",
                    "routed_y": "38.01806",
                    "routed_order": "63"
                },
                {
                    "routed_x": "23.72949",
                    "routed_y": "38.02052",
                    "routed_order": "64"
                },
                {
                    "routed_x": "23.72962",
                    "routed_y": "38.02095",
                    "routed_order": "65"
                },
                {
                    "routed_x": "23.72954",
                    "routed_y": "38.02099",
                    "routed_order": "66"
                },
                {
                    "routed_x": "23.72783",
                    "routed_y": "38.02158",
                    "routed_order": "67"
                },
                {
                    "routed_x": "23.72611",
                    "routed_y": "38.02227",
                    "routed_order": "68"
                },
                {
                    "routed_x": "23.725",
                    "routed_y": "38.02276",
                    "routed_order": "69"
                },
                {
                    "routed_x": "23.72524",
                    "routed_y": "38.02364",
                    "routed_order": "70"
                },
                {
                    "routed_x": "23.72508",
                    "routed_y": "38.02437",
                    "routed_order": "71"
                },
                {
                    "routed_x": "23.72548",
                    "routed_y": "38.02512",
                    "routed_order": "72"
                },
                {
                    "routed_x": "23.72619",
                    "routed_y": "38.02628",
                    "routed_order": "73"
                },
                {
                    "routed_x": "23.72673",
                    "routed_y": "38.02741",
                    "routed_order": "74"
                },
                {
                    "routed_x": "23.72712",
                    "routed_y": "38.02833",
                    "routed_order": "75"
                },
                {
                    "routed_x": "23.7275",
                    "routed_y": "38.02927",
                    "routed_order": "76"
                },
                {
                    "routed_x": "23.72801",
                    "routed_y": "38.03025",
                    "routed_order": "77"
                },
                {
                    "routed_x": "23.72914",
                    "routed_y": "38.03187",
                    "routed_order": "78"
                },
                {
                    "routed_x": "23.7296",
                    "routed_y": "38.03328",
                    "routed_order": "79"
                },
                {
                    "routed_x": "23.73009",
                    "routed_y": "38.03471",
                    "routed_order": "80"
                },
                {
                    "routed_x": "23.73029",
                    "routed_y": "38.03523",
                    "routed_order": "81"
                },
                {
                    "routed_x": "23.73096",
                    "routed_y": "38.03599",
                    "routed_order": "82"
                },
                {
                    "routed_x": "23.73178",
                    "routed_y": "38.03685",
                    "routed_order": "83"
                },
                {
                    "routed_x": "23.73243",
                    "routed_y": "38.03778",
                    "routed_order": "84"
                },
                {
                    "routed_x": "23.73364",
                    "routed_y": "38.03949",
                    "routed_order": "85"
                },
                {
                    "routed_x": "23.73377",
                    "routed_y": "38.03989",
                    "routed_order": "86"
                },
                {
                    "routed_x": "23.73409",
                    "routed_y": "38.04196",
                    "routed_order": "87"
                },
                {
                    "routed_x": "23.73438",
                    "routed_y": "38.04377",
                    "routed_order": "88"
                },
                {
                    "routed_x": "23.73361",
                    "routed_y": "38.04406",
                    "routed_order": "89"
                },
                {
                    "routed_x": "23.73408",
                    "routed_y": "38.04509",
                    "routed_order": "90"
                },
                {
                    "routed_x": "23.73361",
                    "routed_y": "38.04523",
                    "routed_order": "91"
                },
                {
                    "routed_x": "23.73395",
                    "routed_y": "38.04605",
                    "routed_order": "92"
                },
                {
                    "routed_x": "23.73459",
                    "routed_y": "38.0474",
                    "routed_order": "93"
                },
                {
                    "routed_x": "23.7346",
                    "routed_y": "38.04774",
                    "routed_order": "94"
                },
                {
                    "routed_x": "23.73454",
                    "routed_y": "38.04779",
                    "routed_order": "95"
                }
            ],
            "stops": [
                {
                    "StopCode": "10215",
                    "StopID": "49",
                    "StopDescr": "ΑΓ.  ΑΝΑΡΓΥΡΟΙ",
                    "StopDescrEng": "AG. ANARGYROI",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "183",
                    "StopLat": "38.047621",
                    "StopLng": "23.734355",
                    "RouteStopOrder": "1",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50077",
                    "StopID": "050077",
                    "StopDescr": "ΠΑΙΔΙΚΗ ΧΑΡΑ",
                    "StopDescrEng": "PAIDIKH XARA",
                    "StopStreet": "ΜΠΟΥΜΠΟΥΛΙΝΑΣ",
                    "StopStreetEng": null,
                    "StopHeading": "202",
                    "StopLat": "38.0456053",
                    "StopLng": "23.7336303",
                    "RouteStopOrder": "2",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50078",
                    "StopID": "050078",
                    "StopDescr": "ΑΓ. ΜΥΡΟΦΟΡΩΝ",
                    "StopDescrEng": "AG. MYROFORON",
                    "StopStreet": "ΚΟΛΟΚΟΤΡΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "24",
                    "StopLat": "38.0441975",
                    "StopLng": "23.7341755",
                    "RouteStopOrder": "3",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50079",
                    "StopID": "050079",
                    "StopDescr": "ΠΑΠΑΝΔΡΕΟΥ",
                    "StopDescrEng": "PAPANDREOY",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "187",
                    "StopLat": "38.0403508",
                    "StopLng": "23.7336265",
                    "RouteStopOrder": "4",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50080",
                    "StopID": "050080",
                    "StopDescr": "ΒΡΥΟΥΛΩΝ",
                    "StopDescrEng": "BRYOYLON",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "220",
                    "StopLat": "38.0368673",
                    "StopLng": "23.7316221",
                    "RouteStopOrder": "5",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50081",
                    "StopID": "050081",
                    "StopDescr": "ΠΙΝΔΑΡΟΥ",
                    "StopDescrEng": "PINDAROY",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "230",
                    "StopLat": "38.0358376",
                    "StopLng": "23.7306231",
                    "RouteStopOrder": "6",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50092",
                    "StopID": "050092",
                    "StopDescr": "ΑΓ. ΝΙΚΟΛΑΟΣ",
                    "StopDescrEng": "AG. NIKOLAOS",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "198",
                    "StopLat": "38.033645",
                    "StopLng": "23.7295486",
                    "RouteStopOrder": "7",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50082",
                    "StopID": "050082",
                    "StopDescr": "ΠΡΑΚΤΟΡΕΙΑ ΤΥΠΟΥ",
                    "StopDescrEng": "PRAKTOREIA TYPOY",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "215",
                    "StopLat": "38.0315159",
                    "StopLng": "23.7286449",
                    "RouteStopOrder": "8",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50084",
                    "StopID": "050084",
                    "StopDescr": "ΤΕΧΝΙΚΟ ΛΥΚΕΙΟ",
                    "StopDescrEng": "TEXNIKO LYKEIO",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "202",
                    "StopLat": "38.029422",
                    "StopLng": "23.7273764",
                    "RouteStopOrder": "9",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50083",
                    "StopID": "050083",
                    "StopDescr": "ΑΓ.  ΑΝΑΡΓΥΡΩΝ",
                    "StopDescrEng": "AG. ANARGYRON",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "203",
                    "StopLat": "38.0272568",
                    "StopLng": "23.7264615",
                    "RouteStopOrder": "10",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "680026",
                    "StopID": "680026",
                    "StopDescr": "ΓΕΦΥΡΑ",
                    "StopDescrEng": "GEFYRA",
                    "StopStreet": "Κ.ΠΑΛΑΜΑ",
                    "StopStreetEng": null,
                    "StopHeading": "193",
                    "StopLat": "38.0232877",
                    "StopLng": "23.7249496",
                    "RouteStopOrder": "11",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61156",
                    "StopID": "061156",
                    "StopDescr": "ΠΑΛΑΙΟ ΤΕΡΜΑ",
                    "StopDescrEng": "PALAIO TERMA",
                    "StopStreet": "ΤΣΟΥΝΤΑ",
                    "StopStreetEng": null,
                    "StopHeading": "112",
                    "StopLat": "38.0218321",
                    "StopLng": "23.7269033",
                    "RouteStopOrder": "12",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60909",
                    "StopID": "060909",
                    "StopDescr": "ΑΓ. ΕΛΕΥΘΕΡΙΟΣ",
                    "StopDescrEng": "AG. ELEYTHERIOS",
                    "StopStreet": "ΑΧΑΡΝΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "202",
                    "StopLat": "38.0192137",
                    "StopLng": "23.7287472",
                    "RouteStopOrder": "13",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60910",
                    "StopID": "060910",
                    "StopDescr": "ΠΑΠΑΝΤΩΝΙΟΥ",
                    "StopDescrEng": "PAPANTONIOY",
                    "StopStreet": "ΑΧΑΡΝΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "206",
                    "StopLat": "38.0177432",
                    "StopLng": "23.7281602",
                    "RouteStopOrder": "14",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61159",
                    "StopID": "061159",
                    "StopDescr": "ΑΝΔΡΕΑΔΟΥ",
                    "StopDescrEng": "ANDREADOY",
                    "StopStreet": "ΒΙΚΕΛΑ",
                    "StopStreetEng": null,
                    "StopHeading": "286",
                    "StopLat": "38.017044",
                    "StopLng": "23.7267438",
                    "RouteStopOrder": "15",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60139",
                    "StopID": "060139",
                    "StopDescr": "ΖΑΧΑΡΟΠΛΑΣΤΕΙΟ",
                    "StopDescrEng": "ZAXAROPLASTEIO",
                    "StopStreet": "ΚΟΥΡΤΙΔΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "221",
                    "StopLat": "38.0168761",
                    "StopLng": "23.7234811",
                    "RouteStopOrder": "16",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61196",
                    "StopID": "061196",
                    "StopDescr": "ΣΧΟΛΕΙΑ",
                    "StopDescrEng": "SXOLEIA",
                    "StopStreet": "ΚΟΥΡΤΙΔΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "220",
                    "StopLat": "38.0159278",
                    "StopLng": "23.7226303",
                    "RouteStopOrder": "17",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60956",
                    "StopID": "060956",
                    "StopDescr": "ΠΕΖΟΔΡΟΜΟΣ",
                    "StopDescrEng": "PEZODROMOS",
                    "StopStreet": "ΝΙΡΒΑΝΑ",
                    "StopStreetEng": null,
                    "StopHeading": "94",
                    "StopLat": "38.0147841",
                    "StopLng": "23.7262243",
                    "RouteStopOrder": "18",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60912",
                    "StopID": "060912",
                    "StopDescr": "ΓΕΦΥΡΑ",
                    "StopDescrEng": "GEFYRA",
                    "StopStreet": "ΑΧΑΡΝΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "170",
                    "StopLat": "38.0126968",
                    "StopLng": "23.7284864",
                    "RouteStopOrder": "19",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60955",
                    "StopID": "060955",
                    "StopDescr": "ΑΓ. ΔΗΜΗΤΡΙΟΣ",
                    "StopDescrEng": "AG. DHMHTRIOS",
                    "StopStreet": "ΣΤΡ\\ΓΟΥ ΚΑΛΛΑΡΗ",
                    "StopStreetEng": null,
                    "StopHeading": "283",
                    "StopLat": "38.0130944",
                    "StopLng": "23.7235133",
                    "RouteStopOrder": "20",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60135",
                    "StopID": "060135",
                    "StopDescr": "ΓΕΦΥΡΕΣ",
                    "StopDescrEng": "GEFYRES",
                    "StopStreet": "ΝΙΡΒΑΝΑ",
                    "StopStreetEng": null,
                    "StopHeading": "84",
                    "StopLat": "38.014825",
                    "StopLng": "23.721256",
                    "RouteStopOrder": "21",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61169",
                    "StopID": "061169",
                    "StopDescr": "ΣΧΟΛΕΙΑ",
                    "StopDescrEng": "SXOLEIA",
                    "StopStreet": "ΚΟΥΡΤΙΔΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "41",
                    "StopLat": "38.0154229",
                    "StopLng": "23.7225524",
                    "RouteStopOrder": "22",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60137",
                    "StopID": "060137",
                    "StopDescr": "ΖΑΧΑΡΟΠΛΑΣΤΕΙΟ",
                    "StopDescrEng": "ZAXAROPLASTEIO",
                    "StopStreet": "ΚΟΥΡΤΙΔΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "40",
                    "StopLat": "38.0167053",
                    "StopLng": "23.7236641",
                    "RouteStopOrder": "23",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61155",
                    "StopID": "061155",
                    "StopDescr": "ΑΝΔΡΕΑΔΟΥ",
                    "StopDescrEng": "ANDREADOY",
                    "StopStreet": "ΒΙΚΕΛΑ",
                    "StopStreetEng": null,
                    "StopHeading": "286",
                    "StopLat": "38.0168613",
                    "StopLng": "23.7261989",
                    "RouteStopOrder": "24",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60903",
                    "StopID": "060903",
                    "StopDescr": "ΠΑΠΑΝΤΩΝΙΟΥ",
                    "StopDescrEng": "PAPANTONIOY",
                    "StopStreet": "ΑΧΑΡΝΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "355",
                    "StopLat": "38.0170231",
                    "StopLng": "23.7284237",
                    "RouteStopOrder": "25",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60904",
                    "StopID": "060904",
                    "StopDescr": "ΑΓ. ΕΛΕΥΘΕΡΙΟΣ",
                    "StopDescrEng": "AG. ELEYTHERIOS",
                    "StopStreet": "ΑΧΑΡΝΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "17",
                    "StopLat": "38.0195033",
                    "StopLng": "23.7292702",
                    "RouteStopOrder": "26",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60312",
                    "StopID": "060312",
                    "StopDescr": "ΣΧΟΛΕΙΟ",
                    "StopDescrEng": "SXOLEIO",
                    "StopStreet": "ΤΣΟΥΝΤΑ",
                    "StopStreetEng": null,
                    "StopHeading": "288",
                    "StopLat": "38.0213316",
                    "StopLng": "23.7286938",
                    "RouteStopOrder": "27",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61341",
                    "StopID": "061341",
                    "StopDescr": "ΤΕΡΜΑ",
                    "StopDescrEng": "TERMA",
                    "StopStreet": "ΤΣΟΥΝΤΑ",
                    "StopStreetEng": null,
                    "StopHeading": "293",
                    "StopLat": "38.0219232",
                    "StopLng": "23.7272903",
                    "RouteStopOrder": "28",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "680023",
                    "StopID": "680023",
                    "StopDescr": "ΓΕΦΥΡΑ",
                    "StopDescrEng": "GEFYRA",
                    "StopStreet": "Κ.ΠΑΛΑΜΑ",
                    "StopStreetEng": null,
                    "StopHeading": "357",
                    "StopLat": "38.0237122",
                    "StopLng": "23.7253354",
                    "RouteStopOrder": "29",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50023",
                    "StopID": "050023",
                    "StopDescr": "ΑΓ.  ΑΝΑΡΓΥΡΩΝ",
                    "StopDescrEng": "AG. ANARGYRON",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "32",
                    "StopLat": "38.0261837",
                    "StopLng": "23.7262149",
                    "RouteStopOrder": "30",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50085",
                    "StopID": "050085",
                    "StopDescr": "ΤΕΧΝΙΚΟ ΛΥΚΕΙΟ",
                    "StopDescrEng": "TEXNIKO LYKEIO",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "27",
                    "StopLat": "38.0293688",
                    "StopLng": "23.7277299",
                    "RouteStopOrder": "31",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "680025",
                    "StopID": "680025",
                    "StopDescr": "ΠΡΑΚΤ. ΤΥΠΟΥ",
                    "StopDescrEng": "PRAKT. TYPOY",
                    "StopStreet": "Λ.ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "36",
                    "StopLat": "38.0314807",
                    "StopLng": "23.729021",
                    "RouteStopOrder": "32",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "50091",
                    "StopID": "050091",
                    "StopDescr": "ΑΓ. ΝΙΚΟΛΑΟΣ",
                    "StopDescrEng": "AG. NIKOLAOS",
                    "StopStreet": "ΛΑΜΠΡΟΥ ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "19",
                    "StopLat": "38.0337629",
                    "StopLng": "23.7298559",
                    "RouteStopOrder": "33",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "350064",
                    "StopID": "350064",
                    "StopDescr": "ΠΙΝΔΑΡΟΥ",
                    "StopDescrEng": "PINDAROY",
                    "StopStreet": "Λ.ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "18",
                    "StopLat": "38.034638",
                    "StopLng": "23.7302401",
                    "RouteStopOrder": "34",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "350065",
                    "StopID": "350065",
                    "StopDescr": "ΒΡΥΟΥΛΩΝ",
                    "StopDescrEng": "BRYOYLON",
                    "StopStreet": "Λ.ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "35",
                    "StopLat": "38.0379153",
                    "StopLng": "23.7327351",
                    "RouteStopOrder": "35",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "350066",
                    "StopID": "350066",
                    "StopDescr": "ΠΑΠΑΝΔΡΕΟΥ",
                    "StopDescrEng": "PAPANDREOY",
                    "StopStreet": "Λ.ΚΑΤΣΩΝΗ",
                    "StopStreetEng": null,
                    "StopHeading": "9",
                    "StopLat": "38.0402073",
                    "StopLng": "23.7339461",
                    "RouteStopOrder": "36",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "350072",
                    "StopID": "350072",
                    "StopDescr": "ΑΓ. ΜΥΡΟΦΟΡΩΝ",
                    "StopDescrEng": "AG. MYROFORON",
                    "StopStreet": "ΠΑΠΑΦΛΕΣΣΑ",
                    "StopStreetEng": null,
                    "StopHeading": "24",
                    "StopLat": "38.0441795",
                    "StopLng": "23.7337655",
                    "RouteStopOrder": "37",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "350073",
                    "StopID": "350073",
                    "StopDescr": "ΠΑΙΔΙΚΗ ΧΑΡΑ",
                    "StopDescrEng": "PAIDIKH XARA",
                    "StopStreet": "ΜΠΟΥΜΠΟΥΛΙΝΑΣ",
                    "StopStreetEng": null,
                    "StopHeading": "23",
                    "StopLat": "38.0457322",
                    "StopLng": "23.7339831",
                    "RouteStopOrder": "38",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "10215",
                    "StopID": "49",
                    "StopDescr": "ΑΓ.  ΑΝΑΡΓΥΡΟΙ",
                    "StopDescrEng": "AG. ANARGYROI",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "183",
                    "StopLat": "38.047621",
                    "StopLng": "23.734355",
                    "RouteStopOrder": "39",
                    "StopType": "0",
                    "StopAmea": "0"
                }
            ]
        }

        this.points['3659'] = {
            "details": [
                {
                    "routed_x": "23.74721",
                    "routed_y": "37.98852",
                    "routed_order": "1"
                },
                {
                    "routed_x": "23.74676",
                    "routed_y": "37.9883",
                    "routed_order": "2"
                },
                {
                    "routed_x": "23.74528",
                    "routed_y": "37.98758",
                    "routed_order": "3"
                },
                {
                    "routed_x": "23.74386",
                    "routed_y": "37.98689",
                    "routed_order": "4"
                },
                {
                    "routed_x": "23.74367",
                    "routed_y": "37.9868",
                    "routed_order": "5"
                },
                {
                    "routed_x": "23.74311",
                    "routed_y": "37.98652",
                    "routed_order": "6"
                },
                {
                    "routed_x": "23.74192",
                    "routed_y": "37.98593",
                    "routed_order": "7"
                },
                {
                    "routed_x": "23.74059",
                    "routed_y": "37.98529",
                    "routed_order": "8"
                },
                {
                    "routed_x": "23.74017",
                    "routed_y": "37.98508",
                    "routed_order": "9"
                },
                {
                    "routed_x": "23.7398",
                    "routed_y": "37.98489",
                    "routed_order": "10"
                },
                {
                    "routed_x": "23.73932",
                    "routed_y": "37.98463",
                    "routed_order": "11"
                },
                {
                    "routed_x": "23.73911",
                    "routed_y": "37.98452",
                    "routed_order": "12"
                },
                {
                    "routed_x": "23.73897",
                    "routed_y": "37.98445",
                    "routed_order": "13"
                },
                {
                    "routed_x": "23.73796",
                    "routed_y": "37.98392",
                    "routed_order": "14"
                },
                {
                    "routed_x": "23.73698",
                    "routed_y": "37.98347",
                    "routed_order": "15"
                },
                {
                    "routed_x": "23.73666",
                    "routed_y": "37.98334",
                    "routed_order": "16"
                },
                {
                    "routed_x": "23.73512",
                    "routed_y": "37.98255",
                    "routed_order": "17"
                },
                {
                    "routed_x": "23.73399",
                    "routed_y": "37.98197",
                    "routed_order": "18"
                },
                {
                    "routed_x": "23.73431",
                    "routed_y": "37.98153",
                    "routed_order": "19"
                },
                {
                    "routed_x": "23.73521",
                    "routed_y": "37.98047",
                    "routed_order": "20"
                },
                {
                    "routed_x": "23.73549",
                    "routed_y": "37.98014",
                    "routed_order": "21"
                },
                {
                    "routed_x": "23.73563",
                    "routed_y": "37.97997",
                    "routed_order": "22"
                },
                {
                    "routed_x": "23.73577",
                    "routed_y": "37.97979",
                    "routed_order": "23"
                },
                {
                    "routed_x": "23.73597",
                    "routed_y": "37.97953",
                    "routed_order": "24"
                },
                {
                    "routed_x": "23.73471",
                    "routed_y": "37.97887",
                    "routed_order": "25"
                },
                {
                    "routed_x": "23.73435",
                    "routed_y": "37.97868",
                    "routed_order": "26"
                },
                {
                    "routed_x": "23.73324",
                    "routed_y": "37.97808",
                    "routed_order": "27"
                },
                {
                    "routed_x": "23.73331",
                    "routed_y": "37.97799",
                    "routed_order": "28"
                },
                {
                    "routed_x": "23.73357",
                    "routed_y": "37.97767",
                    "routed_order": "29"
                },
                {
                    "routed_x": "23.73376",
                    "routed_y": "37.97743",
                    "routed_order": "30"
                },
                {
                    "routed_x": "23.73417",
                    "routed_y": "37.97697",
                    "routed_order": "31"
                },
                {
                    "routed_x": "23.73447",
                    "routed_y": "37.97661",
                    "routed_order": "32"
                },
                {
                    "routed_x": "23.73438",
                    "routed_y": "37.97627",
                    "routed_order": "33"
                },
                {
                    "routed_x": "23.73399",
                    "routed_y": "37.97562",
                    "routed_order": "34"
                },
                {
                    "routed_x": "23.73406",
                    "routed_y": "37.97503",
                    "routed_order": "35"
                },
                {
                    "routed_x": "23.73341",
                    "routed_y": "37.97513",
                    "routed_order": "36"
                },
                {
                    "routed_x": "23.73264",
                    "routed_y": "37.97521",
                    "routed_order": "37"
                },
                {
                    "routed_x": "23.73192",
                    "routed_y": "37.97529",
                    "routed_order": "38"
                },
                {
                    "routed_x": "23.73068",
                    "routed_y": "37.97542",
                    "routed_order": "39"
                },
                {
                    "routed_x": "23.729",
                    "routed_y": "37.97571",
                    "routed_order": "40"
                },
                {
                    "routed_x": "23.7283",
                    "routed_y": "37.97587",
                    "routed_order": "41"
                },
                {
                    "routed_x": "23.7282",
                    "routed_y": "37.97592",
                    "routed_order": "42"
                },
                {
                    "routed_x": "23.72749",
                    "routed_y": "37.97612",
                    "routed_order": "43"
                },
                {
                    "routed_x": "23.72758",
                    "routed_y": "37.97654",
                    "routed_order": "44"
                },
                {
                    "routed_x": "23.72639",
                    "routed_y": "37.97668",
                    "routed_order": "45"
                },
                {
                    "routed_x": "23.72531",
                    "routed_y": "37.97683",
                    "routed_order": "46"
                },
                {
                    "routed_x": "23.7236",
                    "routed_y": "37.97707",
                    "routed_order": "47"
                },
                {
                    "routed_x": "23.72192",
                    "routed_y": "37.97729",
                    "routed_order": "48"
                },
                {
                    "routed_x": "23.72127",
                    "routed_y": "37.97737",
                    "routed_order": "49"
                },
                {
                    "routed_x": "23.72133",
                    "routed_y": "37.97757",
                    "routed_order": "50"
                },
                {
                    "routed_x": "23.72136",
                    "routed_y": "37.97775",
                    "routed_order": "51"
                },
                {
                    "routed_x": "23.72113",
                    "routed_y": "37.97797",
                    "routed_order": "52"
                },
                {
                    "routed_x": "23.72222",
                    "routed_y": "37.97885",
                    "routed_order": "53"
                },
                {
                    "routed_x": "23.72228",
                    "routed_y": "37.97889",
                    "routed_order": "54"
                },
                {
                    "routed_x": "23.72155",
                    "routed_y": "37.97963",
                    "routed_order": "55"
                },
                {
                    "routed_x": "23.72157",
                    "routed_y": "37.97973",
                    "routed_order": "56"
                },
                {
                    "routed_x": "23.72139",
                    "routed_y": "37.97994",
                    "routed_order": "57"
                },
                {
                    "routed_x": "23.72118",
                    "routed_y": "37.98027",
                    "routed_order": "58"
                },
                {
                    "routed_x": "23.72083",
                    "routed_y": "37.98072",
                    "routed_order": "59"
                },
                {
                    "routed_x": "23.72066",
                    "routed_y": "37.9809",
                    "routed_order": "60"
                },
                {
                    "routed_x": "23.71993",
                    "routed_y": "37.98194",
                    "routed_order": "61"
                },
                {
                    "routed_x": "23.71901",
                    "routed_y": "37.98317",
                    "routed_order": "62"
                },
                {
                    "routed_x": "23.71874",
                    "routed_y": "37.98356",
                    "routed_order": "63"
                },
                {
                    "routed_x": "23.71802",
                    "routed_y": "37.98458",
                    "routed_order": "64"
                },
                {
                    "routed_x": "23.71796",
                    "routed_y": "37.98465",
                    "routed_order": "65"
                },
                {
                    "routed_x": "23.71764",
                    "routed_y": "37.98458",
                    "routed_order": "66"
                },
                {
                    "routed_x": "23.71549",
                    "routed_y": "37.9841",
                    "routed_order": "67"
                },
                {
                    "routed_x": "23.7149",
                    "routed_y": "37.9842",
                    "routed_order": "68"
                },
                {
                    "routed_x": "23.7131",
                    "routed_y": "37.9846",
                    "routed_order": "69"
                },
                {
                    "routed_x": "23.7119",
                    "routed_y": "37.98484",
                    "routed_order": "70"
                },
                {
                    "routed_x": "23.71079",
                    "routed_y": "37.98534",
                    "routed_order": "71"
                },
                {
                    "routed_x": "23.71115",
                    "routed_y": "37.98633",
                    "routed_order": "72"
                },
                {
                    "routed_x": "23.71062",
                    "routed_y": "37.98714",
                    "routed_order": "73"
                },
                {
                    "routed_x": "23.70992",
                    "routed_y": "37.98817",
                    "routed_order": "74"
                },
                {
                    "routed_x": "23.70925",
                    "routed_y": "37.98911",
                    "routed_order": "75"
                },
                {
                    "routed_x": "23.70905",
                    "routed_y": "37.9892",
                    "routed_order": "76"
                },
                {
                    "routed_x": "23.70877",
                    "routed_y": "37.98928",
                    "routed_order": "77"
                }
            ],
            "stops": [
                {
                    "StopCode": "10179",
                    "StopID": "22",
                    "StopDescr": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopDescrEng": "IPPOKRATOYS",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "251",
                    "StopLat": "37.988318",
                    "StopLng": "23.747525",
                    "RouteStopOrder": "1",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60666",
                    "StopID": "060666",
                    "StopDescr": "ΛΑΣΚΑΡΕΩΣ",
                    "StopDescrEng": "LASKAREOS",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "247",
                    "StopLat": "37.9869545",
                    "StopLng": "23.7437954",
                    "RouteStopOrder": "2",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60667",
                    "StopID": "060667",
                    "StopDescr": "ΤΣΙΜΙΣΚΗ",
                    "StopDescrEng": "TSIMISKH",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "245",
                    "StopLat": "37.9859948",
                    "StopLng": "23.7418287",
                    "RouteStopOrder": "3",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60668",
                    "StopID": "060668",
                    "StopDescr": "ΚΑΛΛΙΔΡΟΜΙΟΥ",
                    "StopDescrEng": "KALLIDROMIOY",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "244",
                    "StopLat": "37.9847817",
                    "StopLng": "23.7394074",
                    "RouteStopOrder": "4",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61109",
                    "StopID": "061109",
                    "StopDescr": "ΔΙΔΟΤΟΥ",
                    "StopDescrEng": "DIDOTOY",
                    "StopStreet": "ΙΠΠΟΚΡΑΤΟΥΣ",
                    "StopStreetEng": null,
                    "StopHeading": "242",
                    "StopLat": "37.9835505",
                    "StopLng": "23.7369407",
                    "RouteStopOrder": "5",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60869",
                    "StopID": "060869",
                    "StopDescr": "ΑΚΑΔΗΜΙΑΣ",
                    "StopDescrEng": "AKADHMIAS",
                    "StopStreet": "ΑΚΑΔΗΜΙΑΣ",
                    "StopStreetEng": null,
                    "StopHeading": "144",
                    "StopLat": "37.9808778",
                    "StopLng": "23.7347412",
                    "RouteStopOrder": "6",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "61261",
                    "StopID": "061261",
                    "StopDescr": "ΟΜΗΡΟΥ",
                    "StopDescrEng": "OMHROY",
                    "StopStreet": "ΟΜΗΡΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "242",
                    "StopLat": "37.9791209",
                    "StopLng": "23.7350436",
                    "RouteStopOrder": "7",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60991",
                    "StopID": "060991",
                    "StopDescr": "ΣΥΝΤΑΓΜΑ",
                    "StopDescrEng": "SYNTAGMA",
                    "StopStreet": "ΠΛ.ΣΥΝΤΑΓΜΑΤΟΣ",
                    "StopStreetEng": null,
                    "StopHeading": "195",
                    "StopLat": "37.9759189",
                    "StopLng": "23.733962",
                    "RouteStopOrder": "8",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60795",
                    "StopID": "060795",
                    "StopDescr": "ΜΗΤΡΟΠΟΛΗ",
                    "StopDescrEng": "MHTROPOLH",
                    "StopStreet": "ΜΗΤΡΟΠΟΛΕΩΣ",
                    "StopStreetEng": null,
                    "StopHeading": "279",
                    "StopLat": "37.9755825",
                    "StopLng": "23.7302172",
                    "RouteStopOrder": "9",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60970",
                    "StopID": "060970",
                    "StopDescr": "ΜΟΝΑΣΤΗΡΑΚΙ",
                    "StopDescrEng": "MONASTHRAKI",
                    "StopStreet": "ΕΡΜΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "282",
                    "StopLat": "37.9767674",
                    "StopLng": "23.7266718",
                    "RouteStopOrder": "10",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60341",
                    "StopID": "060341",
                    "StopDescr": "ΣΤ. ΗΣΑΠ ΘΗΣΕΙΟ",
                    "StopDescrEng": "ST. HSAP THISEIO",
                    "StopStreet": "ΕΡΜΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "274",
                    "StopLat": "37.9773953",
                    "StopLng": "23.7215229",
                    "RouteStopOrder": "11",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60342",
                    "StopID": "060342",
                    "StopDescr": "ΠΛ. ΕΛΕΥΘΕΡΙΑΣ",
                    "StopDescrEng": "PL. ELEYTHERIAS",
                    "StopStreet": "ΠΛ.ΚΟΥΜΟΥΝΔΟΥΡΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "317",
                    "StopLat": "37.9807646",
                    "StopLng": "23.7208952",
                    "RouteStopOrder": "12",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60343",
                    "StopID": "060343",
                    "StopDescr": "ΙΚΑ",
                    "StopDescrEng": "IKA",
                    "StopStreet": "ΜΥΛΛΕΡΟΥ",
                    "StopStreetEng": null,
                    "StopHeading": "323",
                    "StopLat": "37.9818084",
                    "StopLng": "23.7201739",
                    "RouteStopOrder": "13",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60243",
                    "StopID": "060243",
                    "StopDescr": "ΑΧΙΛΛΕΩΣ",
                    "StopDescrEng": "AXILLEOS",
                    "StopStreet": "ΑΧΙΛΛΕΩΣ",
                    "StopStreetEng": null,
                    "StopHeading": "254",
                    "StopLat": "37.9846951",
                    "StopLng": "23.7174869",
                    "RouteStopOrder": "14",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60245",
                    "StopID": "060245",
                    "StopDescr": "ΣΠΥΡΟΥ ΠΑΤΣΗ",
                    "StopDescrEng": "SPYROY PATSH",
                    "StopStreet": "ΛΕΩΦ.ΑΘΗΝΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "299",
                    "StopLat": "37.9854185",
                    "StopLng": "23.7110616",
                    "RouteStopOrder": "15",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "60246",
                    "StopID": "060246",
                    "StopDescr": "ΣΧΟΛΕΙΟ",
                    "StopDescrEng": "SXOLEIO",
                    "StopStreet": "ΜΑΡΑΘΩΝΟΜΑΧΩΝ",
                    "StopStreetEng": null,
                    "StopHeading": "-1",
                    "StopLat": "37.9875263",
                    "StopLng": "23.7105522",
                    "RouteStopOrder": "16",
                    "StopType": "0",
                    "StopAmea": "0"
                },
                {
                    "StopCode": "10180",
                    "StopID": "23",
                    "StopDescr": "ΠΡΟΦΗΤΗ ΔΑΝΙΗΛ",
                    "StopDescrEng": "PROFHTH DANIHL",
                    "StopStreet": null,
                    "StopStreetEng": null,
                    "StopHeading": "57",
                    "StopLat": "37.9892855",
                    "StopLng": "23.708955",
                    "RouteStopOrder": "17",
                    "StopType": "0",
                    "StopAmea": "0"
                }
            ]
        };
    }
}

