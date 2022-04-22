import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contiainer: {
    flex: 1,
  },
  carousel: {
    // flex: 1,
  },
  body: {
    // flex: 1,
    flexGrow: 1,
    paddingStart: 20,
    paddingEnd: 20,
  },
  img: {
    borderBottomLeftRadius: 100,
  },
  imgIndex: {
    position: "absolute",
    zIndex: 2,
    top: 15,
    right: 15,
    backgroundColor: "#46444578",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "#FFF",
  },
  indicators: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  btn: {
    fontFamily: "medium",
    fontSize: 20,
    textAlign: "center",
    color: "#FFF",
  },
});
