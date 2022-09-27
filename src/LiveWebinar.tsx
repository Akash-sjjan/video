import React, { Component } from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import { Button, InputLabel, TextField, Typography } from "@material-ui/core";
import { attach, camera, chatDp, microphone, partAudDis, partVidDis, record, share } from "./assets";
import ReactPlayerr from "./ReactPlayerr";

interface Props {
  classes: any;
}
interface States {
  activePage: number;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    lwContainer: {
      paddingLeft: "13%",
      paddingRight: "13%",
      backgroundColor: "#fff",
      display: "flex",
      paddingTop: "2vw",
    },
    lwLeftContainer: {
      flex: 8,
      marginRight: "2vw",
    },
    lwRightContainer: {
      flex: 3,
    },
    lwTitle: {
      color: "#14292d",
      fontWeight: 600,
      fontSize: "1.52vw",
      fontFamily: "Inter",
    },
    lwHr: {
      borderBottom: "0.5px solid #ececf1",
      marginTop: "1vw",
      marginBottom: "2vw",
    },
    lwVideoContainer: {
      //   backgroundColor: "red",
      height: "30vw",
      borderRadius: "1vw",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    lwControlsContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "1vw",
    },
    lwControlItemC: {
      background: "#fff",
      boxShadow: "-1px -1px 25px rgba(255,0,0,0.15)",
      width: "3.8vw",
      height: "3.8vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10em",
      margin: "1vw",
    },
    lwLeaveMeetBtnC: {
      display: "flex",
      justifyContent: "center",
      marginTop: "1.5vw",
      marginBottom: "3.5vw",
    },
    lwLeaveMeetBtn: {
      backgroundColor: "#ff0000",
      borderRadius: "10em",
      color: "#ffffff",
      fontFamily: "Inter",
      fontSize: "0.85vw",
      fontWeight: 700,
      textTransform: "none",
      paddingLeft: "2vw",
      paddingRight: "2vw",
      "&:hover": {
        backgroundColor: "#ff0000",
      },
    },
    lwPartCC: {
      backgroundColor: "#f7f7f7",
      borderRadius: "1vw",
      overflow: "hidden",
      position: "relative",
      marginBottom: "2vw",
    },
    lwParticipantC: {
      height: "14vw",
      overflowY: "scroll",
      paddingLeft: "1.5vw",
      paddingRight: "0.8vw",
      paddingTop: "1.2vw",
      "&::-webkit-scrollbar": {
        width: "5px",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 5px #dcdcdc",
        borderRadius: "10px",
        marginTop: "2vw",
        marginBottom: "2vw",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(20, 41, 45, 0.3)",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "rgba(20, 41, 45, 0.3)",
      },
    },
    lwPartC: {
      display: "flex",
      justifyContent: "space-between",
      height: "3vw",
      alignItems: "center",
    },
    lwPartCLeft: {
      display: "flex",
      alignItems: "center",
    },
    lwPartMuteImg: {
      display: "flex",
    },
    lwPartFadeC: {
      background: "linear-gradient(180deg, rgba(247,247,247,0) 0%, #f7f7f7 100%)",
      height: "3vw",
      width: "100%",
      position: "absolute",
      bottom: 0,
    },
    lwChatInputC: {
      display: "flex",
      backgroundColor: "#f0d17c",
      borderRadius: "0.5vw",
      overflow: "hidden",
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: "0.5vw",
      marginTop: "0.5vw",
    },
    lwChatInput: {
      height: "2vw",
      border: "0.5px solid #979797",
      borderRadius: "0.2vw",
      paddingLeft: "0.5vw",
      width: "100%",
    },
    lwChatSendBtn: {
      backgroundColor: "#ff0000",
      borderRadius: "10em",
      color: "#fff",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "0.7vw",
      textTransform: "none",
      width: "6vw",
      "&:hover": {
        backgroundColor: "#ff0000",
      },
    },
    lwChatAttach: {
      //   heigth: "100%",
      //   width: "2vw",
      paddingLeft: "0.6vw",
      paddingRight: "0.6vw",
      backgroundColor: "transparent",
      border: "0px",

      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    lwChatContainer: {
      height: "17vw",
      overflowY: "scroll",
      /* width */
      "&::-webkit-scrollbar": {
        width: "5px",
      },
      /* Track */
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 5px #dcdcdc",
        borderRadius: "10px",
      },
      /* Handle */
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(20, 41, 45, 0.3)",
        borderRadius: "10px",
      },
      /* Handle on hover */
      "&::-webkit-scrollbar-thumb:hover": {
        background: "rgba(20, 41, 45, 0.3)",
      },
    },
    lwChatItemC: {
      background: "#f7f7f7",
      borderRadius: "0.4vw",
      display: "flex",
      padding: "0.5vw",
      marginBottom: "0.5vw",
      marginRight: "0.3vw",
    },
    lwChatItemRightC: {
      width: "100%",
      marginLeft: "0.7vw",
    },
    lwChatItemRightTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    lwChatItemRightName: {
      color: "#333333",
      fontWeight: 600,
      fontSize: "0.7vw",
      fontFamily: "Inter",
    },
    lwChatItemRightTime: {
      color: "#666666",
      fontWeight: 500,
      fontSize: "0.5vw",
      fontFamily: "Inter",
    },
    lwChatItemRightMessage: {
      color: "#666666",
      fontWeight: 400,
      fontSize: "0.5vw",
      fontFamily: "Inter",
    },
    lwControlIconCam: {
      width: "1.8vw",
    },
    lwControlIconMic: {
      width: "1.2vw",
    },
    lwControlIconRec: {
      width: "1.3vw",
    },
    lwControlIconShare: {
      width: "1.5vw",
    },
    lwChatItemImg: {
      width: "3vw",
      height: "3vw",
    },
    lwChatAttachIcon: {
      width: "0.9vw",
    },
    lwPartImg: {
      width: "2.5vw",
      backgroundColor: "red",
      borderRadius: "10em",
      overflow: "hidden",
      objectFit: "cover",
    },
    lwPartName: {
      color: "#333333",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "0.8vw",
      marginLeft: "0.8vw",
    },
    lwPartStatusAudioIcon: {
      height: "1vw",
      marginRight: "1vw",
      objectFit: "cover",
    },
    lwPartStatusVidIcon: {
      height: "1vw",
    },
  });
// Customizable Area End
const url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

class LiveWebinar extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activePage: 6,
    };
  }
  async componentWillMount() {}

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.lwContainer}>
        <div className={classes.lwLeftContainer}>
          <Typography className={classes.lwTitle}>Webinar Name</Typography>
          <div className={classes.lwHr} />
          <div className={classes.lwVideoContainer}>
            <ReactPlayerr url={url} />
          </div>
          <div className={classes.lwControlsContainer}>
            <Button className={classes.lwControlItemC}>
              <img src={camera} alt="" className={classes.lwControlIconCam} />
            </Button>
            <Button className={classes.lwControlItemC}>
              <img src={microphone} alt="" className={classes.lwControlIconMic} />
            </Button>
            <Button className={classes.lwControlItemC}>
              <img src={record} alt="" className={classes.lwControlIconRec} />
            </Button>
            <Button className={classes.lwControlItemC}>
              <img src={share} alt="" className={classes.lwControlIconShare} />
            </Button>
          </div>
          <div className={classes.lwLeaveMeetBtnC}>
            <Button variant="contained" className={classes.lwLeaveMeetBtn}>
              Leave Meeting
            </Button>
          </div>
        </div>
        <div className={classes.lwRightContainer}>
          <Typography className={classes.lwTitle}>Participants (32)</Typography>
          <div className={classes.lwHr} />
          <div className={classes.lwPartCC}>
            <div className={classes.lwParticipantC}>
              <div className={classes.lwPartC}>
                <div className={classes.lwPartCLeft}>
                  <img className={classes.lwPartImg} src={chatDp} alt="" />
                  <Typography className={classes.lwPartName}>User Name</Typography>
                </div>
                <div className={classes.lwPartMuteImg}>
                  <img src={partAudDis} alt="" className={classes.lwPartStatusAudioIcon} />
                  <img src={partVidDis} alt="" className={classes.lwPartStatusVidIcon} />
                </div>
              </div>
              <div className={classes.lwPartC}>
                <div className={classes.lwPartCLeft}>
                  <img className={classes.lwPartImg} src={chatDp} alt="" />
                  <Typography className={classes.lwPartName}>User Name</Typography>
                </div>
                <div className={classes.lwPartMuteImg}>
                  <img src={partAudDis} alt="" className={classes.lwPartStatusAudioIcon} />
                  <img src={partVidDis} alt="" className={classes.lwPartStatusVidIcon} />
                </div>
              </div>
              <div className={classes.lwPartC}>
                <div className={classes.lwPartCLeft}>
                  <img className={classes.lwPartImg} src={chatDp} alt="" />
                  <Typography className={classes.lwPartName}>User Name</Typography>
                </div>
                <div className={classes.lwPartMuteImg}>
                  <img src={partAudDis} alt="" className={classes.lwPartStatusAudioIcon} />
                  <img src={partVidDis} alt="" className={classes.lwPartStatusVidIcon} />
                </div>
              </div>
              <div className={classes.lwPartC}>
                <div className={classes.lwPartCLeft}>
                  <img className={classes.lwPartImg} src={chatDp} alt="" />
                  <Typography className={classes.lwPartName}>User Name</Typography>
                </div>
                <div className={classes.lwPartMuteImg}>
                  <img src={partAudDis} alt="" className={classes.lwPartStatusAudioIcon} />
                  <img src={partVidDis} alt="" className={classes.lwPartStatusVidIcon} />
                </div>
              </div>
              <div className={classes.lwPartC}>
                <div className={classes.lwPartCLeft}>
                  <img className={classes.lwPartImg} src={chatDp} alt="" />
                  <Typography className={classes.lwPartName}>User Name</Typography>
                </div>
                <div className={classes.lwPartMuteImg}>
                  <img src={partAudDis} alt="" className={classes.lwPartStatusAudioIcon} />
                  <img src={partVidDis} alt="" className={classes.lwPartStatusVidIcon} />
                </div>
              </div>
              <div className={classes.lwPartC}>
                <div className={classes.lwPartCLeft}>
                  <img className={classes.lwPartImg} src={chatDp} alt="" />
                  <Typography className={classes.lwPartName}>User Name</Typography>
                </div>
                <div className={classes.lwPartMuteImg}>
                  <img src={partAudDis} alt="" className={classes.lwPartStatusAudioIcon} />
                  <img src={partVidDis} alt="" className={classes.lwPartStatusVidIcon} />
                </div>
              </div>
              <div className={classes.lwPartC}>
                <div className={classes.lwPartCLeft}>
                  <img className={classes.lwPartImg} src={chatDp} alt="" />
                  <Typography className={classes.lwPartName}>User Name</Typography>
                </div>
                <div className={classes.lwPartMuteImg}>
                  <img src={partAudDis} alt="" className={classes.lwPartStatusAudioIcon} />
                  <img src={partVidDis} alt="" className={classes.lwPartStatusVidIcon} />
                </div>
              </div>
            </div>
            <div className={classes.lwPartFadeC}></div>
          </div>
          <div className={classes.lwTitle}>Chat</div>
          <div className={classes.lwHr} />
          <div className={classes.lwChatContainer}>
            <div className={classes.lwChatItemC}>
              <img className={classes.lwChatItemImg} src={chatDp} alt="" />
              <div className={classes.lwChatItemRightC}>
                <div className={classes.lwChatItemRightTop}>
                  <Typography className={classes.lwChatItemRightName}>name</Typography>
                  <Typography className={classes.lwChatItemRightTime}>09:30PM</Typography>
                </div>
                <div className={classes.lwChatItemRightBottom}>
                  <p className={classes.lwChatItemRightMessage}>Massage Massage Massage Massage Massage</p>
                </div>
              </div>
            </div>
            <div className={classes.lwChatItemC}>
              <img className={classes.lwChatItemImg} src={chatDp} alt="" />
              <div className={classes.lwChatItemRightC}>
                <div className={classes.lwChatItemRightTop}>
                  <Typography className={classes.lwChatItemRightName}>name</Typography>
                  <Typography className={classes.lwChatItemRightTime}>09:30PM</Typography>
                </div>
                <div className={classes.lwChatItemRightBottom}>
                  <p className={classes.lwChatItemRightMessage}>
                    Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.lwChatItemC}>
              <img className={classes.lwChatItemImg} src={chatDp} alt="" />
              <div className={classes.lwChatItemRightC}>
                <div className={classes.lwChatItemRightTop}>
                  <Typography className={classes.lwChatItemRightName}>name</Typography>
                  <Typography className={classes.lwChatItemRightTime}>09:30PM</Typography>
                </div>
                <div className={classes.lwChatItemRightBottom}>
                  <p className={classes.lwChatItemRightMessage}>
                    Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage
                    Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage
                    Massage Massage Massage Massage Massage Massage Massage
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.lwChatItemC}>
              <img className={classes.lwChatItemImg} src={chatDp} alt="" />
              <div className={classes.lwChatItemRightC}>
                <div className={classes.lwChatItemRightTop}>
                  <Typography className={classes.lwChatItemRightName}>name</Typography>
                  <Typography className={classes.lwChatItemRightTime}>09:30PM</Typography>
                </div>
                <div className={classes.lwChatItemRightBottom}>
                  <p className={classes.lwChatItemRightMessage}>Massage Massage</p>
                </div>
              </div>
            </div>
            <div className={classes.lwChatItemC}>
              <img className={classes.lwChatItemImg} src={chatDp} alt="" />
              <div className={classes.lwChatItemRightC}>
                <div className={classes.lwChatItemRightTop}>
                  <Typography className={classes.lwChatItemRightName}>name</Typography>
                  <Typography className={classes.lwChatItemRightTime}>09:30PM</Typography>
                </div>
                <div className={classes.lwChatItemRightBottom}>
                  <p className={classes.lwChatItemRightMessage}>
                    Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage Massage
                    Massage Massage Massage Massage Massag
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.lwChatItemC}>
              <img className={classes.lwChatItemImg} src={chatDp} alt="" />
              <div className={classes.lwChatItemRightC}>
                <div className={classes.lwChatItemRightTop}>
                  <Typography className={classes.lwChatItemRightName}>name</Typography>
                  <Typography className={classes.lwChatItemRightTime}>09:30PM</Typography>
                </div>
                <div className={classes.lwChatItemRightBottom}>
                  <p className={classes.lwChatItemRightMessage}>Massage Massage Massage Massage Mas</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.lwChatInputC}>
            <input placeholder="Type a message" className={classes.lwChatInput} />
            {/* <TextField
              id="outlined-textarea"
              className={classes.lwChatInput}
              placeholder="Type a message"
              multiline
              variant="outlined"
            /> */}
            <button
              className={classes.lwChatAttach}
              onClick={() => {
                console.log("Attach");
              }}
            >
              <img src={attach} alt="" className={classes.lwChatAttachIcon} />
            </button>
            <Button className={classes.lwChatSendBtn} variant="contained">
              Send
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(LiveWebinar);
