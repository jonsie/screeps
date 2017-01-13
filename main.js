const BASIC_HARVESTER = [MOVE, WORK, CARRY];
const BASIC_HARVESTER_COST = 200;
module.exports.loop = function () {

  const spawn = Game.spawns['Spawn1'];


  console.log(spawn.energy);

  if (spawn.energy >= 200) {
    buildCreep(spawn, BASIC_HARVESTER);
  }

  const creep = Game.creeps['creep1'];

  if (creep.carry.energy < creep.carryCapacity) {

      const sources = creep.room.find(FIND_SOURCES);
    const target_source = sources[1];

    if (creep.harvest(target_source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(target_source);
    }


  } else {

    const spawns = creep.room.find(FIND_MY_SPAWNS);
    const target_spawn = spawns[0];

    if (creep.transfer(target_spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE, creep.carry.energy) {
      creep.moveTo(target_spawn);
    } else {
      console.log('ELSE')
    }

  }

}


function buildCreep(spawnStructure, creepBodyType) {

  if (spawnStructure.canCreateCreep(creepBodyType) === OK) {
    const name = 'Harvester' + Game.creeps.length;
    console.log('Building creep: ' + name);
    spawnStructure.createCreep(creepBodyType, name);
  }
}