!["Village"](https://eloquentjavascript.net/img/village2x.png)
# project-robot

## The Task
The robot must deliver a number of parcels around the village. Each parcel  
is addressed to a different place. The robot picks them up and delivers them  
based on where they are. It must decide where to go next and will finish only  
when all of the parcels are delivered.

Instead of approaching this with an OOP mindset, it would help to try to condense  
the situation to as minimal a state as possible. Rather than changing the state  
when the robot moves, we should craft a new state after the move is made

```
class VillageState {
  constructor(place, parcels) {
   this.place = place;
   this.parcels = parcels;
  }


  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {  
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}
```
