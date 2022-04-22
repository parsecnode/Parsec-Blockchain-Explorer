var api = 'https://parsecnodes.com/services/node_web';
var apiList = ["https://node.parsecnodes.com:32616", "https://node2.parsecnodes.com:32616"];

var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'PARS';
var refreshDelay = 30000;
var blocksPerPage = 20;
var whiteTheme = "css/light.css";
var nightTheme = "css/dark.css";
var addressPattern = new RegExp("^P[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{94}$");
