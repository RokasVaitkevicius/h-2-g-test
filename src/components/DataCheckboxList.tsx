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
import { DataCheckboxListProps } from '../types';

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

const DataCheckboxList: React.FC<DataCheckboxListProps> = props => {
  const classes = useStyles();
  const { data, onClick, header } = props;

  return (
    <div>
      <Typography variant="h2">{header}</Typography>
      <Paper className={classes.paper}>
        <List className={classes.root}>
          {data &&
            data.length > 0 &&
            data.map(d => {
              const labelId = `checkbox-list-label-${d.id}`;

              return (
                <ListItem
                  key={d.id}
                  role={undefined}
                  dense
                  button
                  onClick={() => onClick(d.id)}
                >
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
    </div>
  );
};

export default DataCheckboxList;
