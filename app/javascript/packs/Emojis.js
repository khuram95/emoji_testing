import React,{ useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import Grid from '@material-ui/core/Grid'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import EmojiIcon from '@material-ui/icons/EmojiEmotions'
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'


const Emojis = (props) => {

  const { classes } = props
  const [emojiPopup, setEmojiPopup] = useState(false)

  const handleInputChange = (event) => {
  }

  const openEmoji = (event) => {
    setEmojiPopup(event.currentTarget);
  }

  const closeEmoji = () => {
    setEmojiPopup(null)
  }


  const addEmoji = (emoji, e) => {
    let inputRef = document.getElementById("message-input-field")
    inputRef.value = (inputRef.value+emoji.native)
  }

  const emojiTab = () => {
    return(
      <Popover
        id='emoji-popover'
        open={Boolean(emojiPopup)}
        anchorEl={emojiPopup}
        onClose={closeEmoji}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Grid item xs={12} className={classes.emojiContainer}>
          <Picker
            native
            theme='dark'
            onSelect={(emoji, e) => addEmoji(emoji,e)}
          />
        </Grid>
      </Popover>
    )
  }

  return (
    <Grid item xs={12} className={classes.inputMessageContainer}>
      <OutlinedInput
        autoFocus
        fullWidth
        multiline
        rowsMax="10"
        id="message-input-field"
        labelWidth={70}
        notched={false}
        onKeyDown={(event) => handleInputChange(event)}
        placeholder={`message in`}
        classes={{
          root: classes.inputRoot,
          notchedOutline: classes.outlinedInput
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-describedby='emoji-popover'
              onClick={openEmoji}
              edge="end"
            >
              <EmojiIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      {emojiTab()}
    </Grid>
  );
}

export default withStyles(styles)(Emojis)
