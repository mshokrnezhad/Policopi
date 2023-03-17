import { StyleSheet } from "react-native";

const styles = (props = {}) =>
  StyleSheet.create({
    BLO: {
      backgroundColor: "#d81b60",
      position: "absolute",
      left: "0px",
      display: props ? "" : "none",
    },
    BLI: {
      backgroundColor: "#d81b60",
      position: "absolute",
      right: props ? "" : "130px",
      display: props ? "none" : "",
    },
    UID: {
      marginTop: "5px",
      fontWeight: "bold",
      position: "absolute",
      right: "175px",
      display: props ? "" : "none",
    },
    AVT: {
      position: "absolute",
      right: "125px",
      display: props ? "" : "none",
    },
    SIC: {
      backgroundColor: "#0d47a1",
      position: "absolute",
      right: "0px",
    },
    SNM: {
      fontWeight: "bold",
      fontFamily: "IranSANS",
      marginRight: "10px",
    },
  });

export default styles;
