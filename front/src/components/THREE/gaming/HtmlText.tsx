import { Html } from "@react-three/drei";
import { Dispatch, SetStateAction } from "react";
import "../../THREE/App.css";

interface props {
  play: Boolean;
  win: Boolean;
  setplay: Dispatch<SetStateAction<Boolean>>;
}

const HtmlText = ({ play, win, setplay }: props) => {
  
  // const changePanel =()=>{
    
  //   return();
  // }
  
  // const titulo = GameText[0][0];

  //TODO Se puede hacer MAS FACIL CON NUMEROS, COMO ESTADO-- 0 dar a JUGAR, 1 EN PAUSA (en linea), 2 VICTORIA, 3 GAMEOVER

  return (
    <Html position={[-2.5, 7, 0]}>
      <div className="text-box">
        {/* Si play es false y win es false ->hay que darle a Play para jugar. 
              Si play es false y win es true -> Ganaste la partida, volvera al menu de Play en 6 segundos.
              Si play es true -> puedes poner en pasua y al volver darle al play -> se reiniciara el juego */}
        {/* Hay que simplificarlo, ya que no es la forma mas eificente. Se utilizan dos useState */}
        {/* PROBLEMA Al actualizar el valor de createContext, no envia evento a
            los componentes que usan el useContext? SOLUCION useContext? */}
        {!play ? (
          !win ? (
            <div>
              <button
                onClick={() => {
                  console.log("PLAY LUNES");
                  setplay(true);
                }}
                className="title"
              >
                | PLAY
              </button>
              <br />
              <p>Click on blue box to shoot</p>
              <p>
                The goal is to hit the black box which will be mimicing your
                movements. Hit 3 times to EARN tokens.
              </p>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  console.log("PLAY LUNES");
                  setplay(true);
                }}
                className="text-box-win"
              >
                | VICTORY
              </button>
              <br />
              <p>Claim your Tokens</p>
            </div>
          )
        ) : (
          <button onClick={() => setplay(false)} /* className="title" */>
            | PAUSE
          </button>
        )}
      </div>
    </Html>
  );
};

export default HtmlText;