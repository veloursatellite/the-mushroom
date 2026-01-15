// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004040404050504040404040505040404040304060204070304020403050605040506010804010a04020503010602060412030402050306020c0d05030501070504040201030002040f0e0001030b0405040407080603010400060208050201050402050103050002020100000102040404020b0300030304050204030602010405020105090906020001030a020404040504030501030c0d0300060102020604050206020c060f100201050206020712040002080f0b050306030301020a0111050404020602040b090a040304040304040603060201020603020206030506040404040301040202040507040304030407110504040504040504040505050404`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . 2 . . 2 . 2 . 2 . 2 2 
2 . . . 2 . . 2 . 2 . . . . . 2 
2 . 2 . 2 . . . . . 2 . 2 . . 2 
2 2 . . . . . 2 . . . . . . 2 2 
2 2 . . . . . 2 . . . . 2 . . 2 
2 . 2 . . 2 . . . . . . . . 2 2 
2 . . . . . . 2 2 . 2 . . . . 2 
2 . . 2 . . . . . . . . . 2 2 2 
2 2 . 2 . . . . . . . . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 2 2 . . . 2 . . . 2 . 2 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 2 2 . . 2 . . 2 2 . 2 . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.castle.shrub,sprites.castle.rock2,sprites.skillmap.islandTile0,sprites.skillmap.islandTile7,sprites.skillmap.islandTile8,sprites.skillmap.islandTile6,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.rock1,sprites.castle.rock0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
