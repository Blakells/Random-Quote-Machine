import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';


const QuoteMachine = (props) => (
  <Card>
    <CardContent>
        <Typography id='text'>
          {props.selectedQuote.quote} - <span id='author'>{props.selectedQuote.author} </span>
        </Typography>
    </CardContent>
    <React.Fragment>
      <CardActions>
        <Button size ='small' onClick= {props.assignNewQuoteIndex} id='new-quote' style={{color:'white', backgroundColor: 'grey', borderRadius: '50vh' , cursor: 'pointer'}}>Next Quote</Button>
        <IconButton
        id='tweet-quote'
        target='_blank'
        href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hashtag=freeCodeCamp`)}
        >
          <FontAwesomeIcon icon={faTwitter} size='md'></FontAwesomeIcon>
        </IconButton>
      </CardActions>
    </React.Fragment>
  </Card>
);


export default QuoteMachine;