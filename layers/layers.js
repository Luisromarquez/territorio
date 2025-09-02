var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1 = new ol.format.GeoJSON();
var features_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1 = format_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1.readFeatures(json_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1.addFeatures(features_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1);
var lyr_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1, 
                style: style_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1,
                popuplayertitle: '250305 TER Eje Neovolcánico Transversal (1) — Cuerpos de Agua',
                interactive: true,
                title: '<img src="styles/legend/250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1.png" /> 250305 TER Eje Neovolcánico Transversal (1) — Cuerpos de Agua'
            });
var format_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2 = new ol.format.GeoJSON();
var features_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2 = format_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2.readFeatures(json_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2.addFeatures(features_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2);
var lyr_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2, 
                style: style_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2,
                popuplayertitle: '250305 TER Eje Neovolcánico Transversal (1) — Maares y calderas',
                interactive: true,
                title: '<img src="styles/legend/250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2.png" /> 250305 TER Eje Neovolcánico Transversal (1) — Maares y calderas'
            });
var format_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3 = new ol.format.GeoJSON();
var features_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3 = format_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3.readFeatures(json_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3.addFeatures(features_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3);
var lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3, 
                style: style_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3,
                popuplayertitle: '250305 TER Eje Neovolcánico Transversal (1) — Volcanes y sierras importantes',
                interactive: true,
                title: '<img src="styles/legend/250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3.png" /> 250305 TER Eje Neovolcánico Transversal (1) — Volcanes y sierras importantes'
            });
var format_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4 = new ol.format.GeoJSON();
var features_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4 = format_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4.readFeatures(json_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4.addFeatures(features_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4);
var lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4, 
                style: style_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4,
                popuplayertitle: '250305 TER Eje Neovolcánico Transversal (1) — Volcanes y sierras secundarias',
                interactive: true,
                title: '<img src="styles/legend/250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4.png" /> 250305 TER Eje Neovolcánico Transversal (1) — Volcanes y sierras secundarias'
            });
var format_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5 = new ol.format.GeoJSON();
var features_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5 = format_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5.readFeatures(json_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5.addFeatures(features_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5);
var lyr_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5, 
                style: style_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5,
                popuplayertitle: '250305 TER Eje Neovolcánico Transversal (1) — Volcanes principales',
                interactive: true,
                title: '<img src="styles/legend/250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5.png" /> 250305 TER Eje Neovolcánico Transversal (1) — Volcanes principales'
            });
var format_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6 = new ol.format.GeoJSON();
var features_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6 = format_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6.readFeatures(json_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6.addFeatures(features_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6);
var lyr_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6, 
                style: style_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6,
                popuplayertitle: '250305 TER Eje Neovolcánico Transversal (1) — Volcanes Activos',
                interactive: true,
                title: '<img src="styles/legend/250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6.png" /> 250305 TER Eje Neovolcánico Transversal (1) — Volcanes Activos'
            });
var group_EjeNeovolcnico = new ol.layer.Group({
                                layers: [lyr_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1,lyr_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2,lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3,lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4,lyr_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5,lyr_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6,],
                                fold: 'open',
                                title: 'Eje Neovolcánico'});

lyr_GoogleSatellite_0.setVisible(true);lyr_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1.setVisible(true);lyr_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2.setVisible(true);lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3.setVisible(true);lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4.setVisible(true);lyr_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5.setVisible(true);lyr_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_EjeNeovolcnico];
lyr_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_250305TEREjeNeovolcnicoTransversal1CuerposdeAgua_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_250305TEREjeNeovolcnicoTransversal1Maaresycalderas_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrasimportantes_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_250305TEREjeNeovolcnicoTransversal1Volcanesysierrassecundarias_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_250305TEREjeNeovolcnicoTransversal1Volcanesprincipales_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_250305TEREjeNeovolcnicoTransversal1VolcanesActivos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});