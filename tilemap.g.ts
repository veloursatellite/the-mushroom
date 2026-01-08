// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004040404050504040404040505040404040104060204070104020401010605040506010804010a01020503030602060404030402050306020203050302010705040402010302020202030301030b0405040407080603010202060208050201050402050203050202020303030302040404020b0303030302050202030602010405020105090906020301030a02040404050401020103030103020601020206040502060202060303020105020602070504070208020b050306030301020a0104050104020602020b090a040308040104040601060201020603020206030504040404040301040202040507040304060404040504040504040504040505050404`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . 2 . . 2 . 2 . . . 2 2 
2 . . . 2 . . . . 2 . . . . . 2 
2 . 2 . 2 . . . . . 2 . . . . 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . 2 . . 2 
2 . 2 . . 2 . . . . . . . . 2 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . 2 . . . . . . . . . 2 2 2 
2 2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . 2 . . . . . . . 2 . . 2 . 2 
2 . . . . . . . . . . . . 2 2 2 
2 2 2 . . 2 . . 2 2 . 2 . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.castle.shrub,sprites.castle.rock2,sprites.skillmap.islandTile0,sprites.skillmap.islandTile7,sprites.skillmap.islandTile8,sprites.skillmap.islandTile6], TileScale.Sixteen);
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
