// Will display in order each step of the game
// 1. GameGrid
// 2. GamerMarking
// 3. GameFinished

import React, {useState} from "react";
import GameGrid from "../components/GameGrid";
import {useLocation} from "react-router-dom";

const CurrentGame = () => {
  let location = useLocation();
  const [categories, setCategories] = useState(location.state.categories)
  const [gameId, setGameId] = useState(location.state.gameId)
  const [players, setPlayers] = useState(location.state.players)
  console.log(gameId,players)
  return (
    <>
      <GameGrid gameId={gameId} players={players}/>

      <h1> CURRENT GAME</h1>
    </>
  );
};

export default CurrentGame;
