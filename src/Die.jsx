import React from "react";

export default function Die(props)
{//"die-item-not-held" : "die-item-held"
   // const styles = {
 //   backgroundColor: props.isHeld ? "#59E391" : "white"
//}
    return(
        <div className="die-item" id={props.isHeld ? "die-item-held" : "die-item-not-held"  /*style={styles}*/} onClick={()=>props.holdDice(props.id)}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )

}