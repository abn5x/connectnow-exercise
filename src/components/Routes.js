import React from 'react';
import { Switch, Route } from 'react-router-dom';
import VideoGames from './VideoGames';
import Contact from './Contact';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/"><VideoGames /></Route>
            <Route exact path="/contact"><Contact /></Route>
        </Switch>
    )
}
