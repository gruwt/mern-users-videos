import { Vector3 } from "three";
import Attackers from "./Attackers";

interface props {
  play: Boolean;
}

const AttackersSpawner = ({ play }: props) => {
  // TODO No permite usar los valores de useContext fuera del componente AttackersSpawner. Y si esta dentro, no permite exportarlo

  return (
    <group>
      <Attackers pos={new Vector3(-2, 2, 0)} wait={30} color={"orange"} play={play} />
      <Attackers pos={new Vector3(0, 2, 0)} wait={40} color={"orange"} play={play}/>
      <Attackers pos={new Vector3(2, 2, 0)} wait={20} color={"orange"} play={play}/>

      <Attackers pos={new Vector3(-2, 0, 0)} wait={10} color={"orange"} play={play}/>

      <Attackers pos={new Vector3(0, 0, 0)} wait={15} color={"yellow"} play={play}/>
      <Attackers pos={new Vector3(0, 0, 0)} wait={30} color={"yellow"} play={play}/>
      <Attackers pos={new Vector3(0, 0, 0)} wait={60} color={"yellow"} play={play}/>
      <Attackers pos={new Vector3(0, 0, 0)} wait={90} color={"yellow"} play={play}/>
      <Attackers pos={new Vector3(0, 0, 0)} wait={120} color={"yellow"} play={play}/>

      <Attackers pos={new Vector3(2, 0, 0)} wait={50} color={"orange"} play={play}/>

      <Attackers pos={new Vector3(0, -2, 0)} wait={70} color={"orange"} play={play}/>
      <Attackers pos={new Vector3(2, -2, 0)} wait={80} color={"orange"} play={play}/>
      <Attackers pos={new Vector3(-2, -2, 0)} wait={120} color={"orange"} play={play}/>
    </group>
  );
};

export default AttackersSpawner;