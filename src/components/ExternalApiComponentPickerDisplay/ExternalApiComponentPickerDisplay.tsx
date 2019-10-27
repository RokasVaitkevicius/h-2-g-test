import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import RadioBox from '../RadioBox';
import {
  ExternalApiCompPickerDisplayProps,
  RenderableComponent,
} from '../../types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DataList from '../DataCheckboxList';
import Indicator from '../Indicator';
import DataButton from '../DataButton';
import SelectBox from '../SelectBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    control: {
      padding: theme.spacing(1),
    },
  })
);

const ExternalApiComponentPickerDisplay: React.FC<
  ExternalApiCompPickerDisplayProps
> = props => {
  const {
    selectedComponent,
    renderableComponents,
    onSelectedComponentChange,
    addRenderableComponent,
  } = props;

  const classes = useStyles();

  const components: Array<RenderableComponent> = [
    {
      name: 'RadioBox',
      component: (props: ExternalApiCompPickerDisplayProps) => (
        <RadioBox
          data={props.apis}
          label={props.radioLabel}
          onChange={e => props.onChangeApi(e.target.value)}
          value={props.apiEndpoint}
        />
      ),
    },
    {
      name: 'Button',
      component: (props: ExternalApiCompPickerDisplayProps) => (
        <DataButton
          disabled={!props.apiEndpoint}
          onClick={() => props.onButtonClick(props.apiEndpoint)}
          buttonText={props.buttonText}
        />
      ),
    },
    {
      name: 'Indicator',
      component: (props: ExternalApiCompPickerDisplayProps) => (
        <Indicator apiStatus={props.apiStatus} />
      ),
    },
    {
      name: 'DataList',
      component: (props: ExternalApiCompPickerDisplayProps) => (
        <DataList
          header={props.apiDataHeader}
          data={props.apiData}
          onClick={props.onApiDataClick}
        />
      ),
    },
  ];

  return (
    <div>
      <Typography variant="h2">
        External Api Component Picker Display
      </Typography>
      <Grid
        container
        direction="column"
        justify="flex-start"
        className={classes.control}
      >
        <Grid item className={classes.control}>
          <SelectBox
            options={components}
            handleChange={e =>
              onSelectedComponentChange(
                components.find(c => c.name === e.target.value)
              )
            }
            value={[selectedComponent.name]}
          />
        </Grid>
        <DataButton
          disabled={!selectedComponent.name}
          onClick={() => addRenderableComponent(selectedComponent)}
          buttonText="APPEND COMPONENT"
        />
      </Grid>
      {renderableComponents &&
        renderableComponents.length > 0 &&
        renderableComponents.map((rc, i) => (
          <Grid
            key={i}
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.control}
          >
            {rc.component(props)}
          </Grid>
        ))}
    </div>
  );
};

export default ExternalApiComponentPickerDisplay;
