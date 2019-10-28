import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { MainPageProps as Props } from './types';
import SelectBox from '../../containers/ComponentsPicker/SelectBox';
import Button from '../../containers/ComponentsPicker/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    control: {
      padding: theme.spacing(1),
    },
  })
);

const ExternalApiComponentPickerDisplay: React.FC<Props> = ({
  label,
  renderableComponents,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h2">{label}</Typography>
      <Grid
        container
        direction="column"
        justify="flex-start"
        className={classes.control}
      >
        <Grid item className={classes.control}>
          <SelectBox />
        </Grid>
        <Button />
      </Grid>
      {renderableComponents &&
        renderableComponents.map((rc, i) => (
          <Grid
            key={i}
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.control}
          >
            {React.createElement(rc.component ? rc.component : '')}
          </Grid>
        ))}
    </React.Fragment>
  );
};

export default ExternalApiComponentPickerDisplay;
