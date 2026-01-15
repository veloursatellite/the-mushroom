// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000404040405050404040404050504040404030400030406030405040305000504050003070407090402050301000300040c030402050300020003050305010605040402010000020400020001030a0405040406070003010400000207050203050403050103050002020100000102040404000a09000200040502040300020304050203050a0800020001030902040404050403050103000003000001020200040503000202000000020105020000060c04030007020a0503000303010a09030b050404020000040a08090403040403040400030002010200030203000305000404040403030400030405060403040304060b0504040504040504040505050404`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . 2 . . 2 2 2 . 2 . 2 2 
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.castle.rock2,sprites.skillmap.islandTile0,sprites.skillmap.islandTile7,sprites.skillmap.islandTile8,sprites.skillmap.islandTile6,sprites.castle.rock1,sprites.castle.rock0], TileScale.Sixteen);
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
