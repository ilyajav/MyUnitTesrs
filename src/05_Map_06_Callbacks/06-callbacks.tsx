import React, {ChangeEvent, MouseEvent} from "react";

export const User = () =>{

    const search = (event: MouseEvent<HTMLButtonElement>) =>{
        alert(event.currentTarget.name)
    }

    const onNameChanged = () =>{
        console.log('Name changed')
    }


    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) =>{
        console.log('Age changed' + event.currentTarget.value)
    }

    const focusLostHandler = () =>{
        console.log('Focus lost')
    }

   return (
    <div>
       <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
       <input onChange={onAgeChanged} type={"number"}/>
       <button name="delete" onClick={search}>search</button>
   </div>
   )
}