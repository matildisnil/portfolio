import React from 'react'
import {Grid, Paper, Typography, Box} from '@mui/material'

const SkillsPaper = ({thisSkill}) => {
  return (
    <Grid item xs={12} sm={3}>
      <Paper elevation={2} sx={{height: 200}}>
        <Box className="skillspaper__text-container">
          <Typography variant="subtitle" component="h3">
              {thisSkill.title}
          </Typography>
          {thisSkill.techs.map((element, index)=> {
            return <Typography key={index}> {element}</Typography>
          })}
        </Box>
      </Paper>
    </Grid>
  )
}

export default SkillsPaper