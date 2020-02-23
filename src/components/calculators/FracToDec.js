import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import validator from "validator";
import { decimalFromFraction } from "../../utils/calculators/OddsConverter";

const useStyles = makeStyles(theme => ({
	root: {
		margin: "auto",
		maxWidth: "30%",
		border: "1px solid #e6e6e6",
		padding: theme.spacing(1)
	},
	title: {
		background: "#000",
		color: "#fff"
	},
	button: {
		margin: theme.spacing(1),
		background: "#1573ca",
		'&:hover': {
			background: "#0d508d"
		}
	}
}));

export default function FracToDec() {
	const classes = useStyles();
	const [fraction, setFraction] = useState("");
	const [decimal, setDecimal] = useState("");

	const handleFractionChange = () => e => {
		setFraction(e.target.value);
	};

	const handleCalculate = () => e => {
		setDecimal(decimalFromFraction(fraction));
	};

	const handleClear = () => e => {
		setFraction("");
		setDecimal("");
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h1">Fractional to Decimal</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField required label="Fraction e.g. 5/2" value={fraction} onChange={handleFractionChange()} />
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" color="primary" className={classes.button} onClick={handleCalculate()}>
						Calculate
					</Button>
					<Button variant="contained" color="primary" className={classes.button} onClick={handleClear()}>
						Clear
					</Button>
				</Grid>
				{!validator.isEmpty(decimal) && !validator.isEmpty(decimal) ? (
					<Grid item xs={6}>
						<Chip variant="outlined" size="small" label={decimal} clickable color="primary" />
					</Grid>
				) : null}
			</Grid>
		</div>
	);
}