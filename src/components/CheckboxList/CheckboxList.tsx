import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Checkbox,
  Typography,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  Paper,
} from '@material-ui/core';
import { CheckboxListProps as Props } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      maxHeight: 300,
      overflow: 'auto',
    },
  })
);

const CheckboxList: React.FC<Props> = ({ data, onClick, header }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h2">{header}</Typography>
      <Paper className={classes.paper}>
        <List className={classes.root}>
          {data &&
            data.map(d => {
              const labelId = `checkbox-list-label-${d.id}`;

              return (
                <ListItem key={d.id} dense button onClick={() => onClick(d.id)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={!!d.isChecked}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                      tabIndex={-1}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={JSON.stringify(d)} />
                </ListItem>
              );
            })}
        </List>
      </Paper>
    </React.Fragment>
  );
};

export default CheckboxList;
