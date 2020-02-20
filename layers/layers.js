var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_manzanas_1 = new ol.format.GeoJSON();
var features_manzanas_1 = format_manzanas_1.readFeatures(json_manzanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanas_1.addFeatures(features_manzanas_1);
var lyr_manzanas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanas_1, 
                style: style_manzanas_1,
                interactive: true,
                title: '<img src="styles/legend/manzanas_1.png" /> manzanas'
            });
var format_Calles_2 = new ol.format.GeoJSON();
var features_Calles_2 = format_Calles_2.readFeatures(json_Calles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Calles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calles_2.addFeatures(features_Calles_2);
var lyr_Calles_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Calles_2, 
                style: style_Calles_2,
                interactive: true,
                title: '<img src="styles/legend/Calles_2.png" /> Calles'
            });
var format_puntos_wgs84_3 = new ol.format.GeoJSON();
var features_puntos_wgs84_3 = format_puntos_wgs84_3.readFeatures(json_puntos_wgs84_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntos_wgs84_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntos_wgs84_3.addFeatures(features_puntos_wgs84_3);
var lyr_puntos_wgs84_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puntos_wgs84_3, 
                style: style_puntos_wgs84_3,
                interactive: true,
                title: '<img src="styles/legend/puntos_wgs84_3.png" /> puntos_wgs84'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_manzanas_1.setVisible(true);lyr_Calles_2.setVisible(true);lyr_puntos_wgs84_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_manzanas_1,lyr_Calles_2,lyr_puntos_wgs84_3];
lyr_manzanas_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_DIST': 'ID_DIST', 'ID_MZNA': 'ID_MZNA', 'ID_PUEBLO': 'ID_PUEBLO', 'ID_PUEBLO_': 'ID_PUEBLO_', 'TIP_FUENTE': 'TIP_FUENTE', 'NRO_MZNA': 'NRO_MZNA', 'AREA_GRAFI': 'AREA_GRAFI', 'FECH_TRAN': 'FECH_TRAN', 'CODI_USER': 'CODI_USER', 'ID_PLANO': 'ID_PLANO', 'SITUACION': 'SITUACION', 'ID_DPTO': 'ID_DPTO', 'ID_PROV': 'ID_PROV', 'AREA': 'AREA', 'LEN': 'LEN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Calles_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODI_USER': 'CODI_USER', 'FECH_TRAN': 'FECH_TRAN', 'ID_CALLE': 'ID_CALLE', 'ID_DIST': 'ID_DIST', 'ID_PLANO': 'ID_PLANO', 'ID_PUEBLO': 'ID_PUEBLO', 'ID_PUEBLO_': 'ID_PUEBLO_', 'NOM_CALLE': 'NOM_CALLE', 'ID_DPTO': 'ID_DPTO', 'ID_PROV': 'ID_PROV', 'LEN': 'LEN', 'Shape_Leng': 'Shape_Leng', });
lyr_puntos_wgs84_3.set('fieldAliases', {'gDatosCal0': 'gDatosCal0', 'gDatosCa_1': 'gDatosCa_1', 'gDatosCa_2': 'gDatosCa_2', 'gDatosCa_3': 'gDatosCa_3', 'gDatosCa_4': 'gDatosCa_4', 'gDatosCa_5': 'gDatosCa_5', 'tUbigeo': 'tUbigeo', 'Lat': 'Lat', 'Long': 'Long', '_tUbigeo_a': '_tUbigeo_a', '_tUbigeo_p': '_tUbigeo_p', 'tImage1': 'tImage1', 'end': 'end', 'meta_insta': 'meta_insta', '_id': '_id', '_uuid': '_uuid', '_submissio': '_submissio', '_index': '_index', '_parent_ta': '_parent_ta', '_parent_in': '_parent_in', '_tags': '_tags', '_notes': '_notes', '_version': '_version', '_duration': '_duration', '_submitted': '_submitted', '_xform_id': '_xform_id', });
lyr_manzanas_1.set('fieldImages', {'OBJECTID': '', 'ID_DIST': '', 'ID_MZNA': '', 'ID_PUEBLO': '', 'ID_PUEBLO_': '', 'TIP_FUENTE': '', 'NRO_MZNA': '', 'AREA_GRAFI': '', 'FECH_TRAN': '', 'CODI_USER': '', 'ID_PLANO': '', 'SITUACION': '', 'ID_DPTO': '', 'ID_PROV': '', 'AREA': '', 'LEN': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Calles_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODI_USER': 'TextEdit', 'FECH_TRAN': 'DateTime', 'ID_CALLE': 'TextEdit', 'ID_DIST': 'TextEdit', 'ID_PLANO': 'TextEdit', 'ID_PUEBLO': 'TextEdit', 'ID_PUEBLO_': 'TextEdit', 'NOM_CALLE': 'TextEdit', 'ID_DPTO': 'TextEdit', 'ID_PROV': 'TextEdit', 'LEN': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_puntos_wgs84_3.set('fieldImages', {'gDatosCal0': 'TextEdit', 'gDatosCa_1': 'TextEdit', 'gDatosCa_2': 'TextEdit', 'gDatosCa_3': 'TextEdit', 'gDatosCa_4': 'TextEdit', 'gDatosCa_5': 'TextEdit', 'tUbigeo': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', '_tUbigeo_a': 'TextEdit', '_tUbigeo_p': 'TextEdit', 'tImage1': 'TextEdit', 'end': 'TextEdit', 'meta_insta': 'TextEdit', '_id': 'TextEdit', '_uuid': 'TextEdit', '_submissio': 'DateTime', '_index': 'TextEdit', '_parent_ta': 'TextEdit', '_parent_in': 'TextEdit', '_tags': 'TextEdit', '_notes': 'TextEdit', '_version': 'TextEdit', '_duration': 'TextEdit', '_submitted': 'TextEdit', '_xform_id': 'TextEdit', });
lyr_manzanas_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID_DIST': 'no label', 'ID_MZNA': 'no label', 'ID_PUEBLO': 'no label', 'ID_PUEBLO_': 'no label', 'TIP_FUENTE': 'no label', 'NRO_MZNA': 'no label', 'AREA_GRAFI': 'no label', 'FECH_TRAN': 'no label', 'CODI_USER': 'no label', 'ID_PLANO': 'no label', 'SITUACION': 'no label', 'ID_DPTO': 'no label', 'ID_PROV': 'no label', 'AREA': 'no label', 'LEN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Calles_2.set('fieldLabels', {'OBJECTID': 'no label', 'CODI_USER': 'no label', 'FECH_TRAN': 'no label', 'ID_CALLE': 'no label', 'ID_DIST': 'no label', 'ID_PLANO': 'no label', 'ID_PUEBLO': 'no label', 'ID_PUEBLO_': 'no label', 'NOM_CALLE': 'no label', 'ID_DPTO': 'no label', 'ID_PROV': 'no label', 'LEN': 'no label', 'Shape_Leng': 'no label', });
lyr_puntos_wgs84_3.set('fieldLabels', {'gDatosCal0': 'no label', 'gDatosCa_1': 'no label', 'gDatosCa_2': 'no label', 'gDatosCa_3': 'no label', 'gDatosCa_4': 'no label', 'gDatosCa_5': 'no label', 'tUbigeo': 'no label', 'Lat': 'no label', 'Long': 'no label', '_tUbigeo_a': 'no label', '_tUbigeo_p': 'no label', 'tImage1': 'no label', 'end': 'no label', 'meta_insta': 'no label', '_id': 'no label', '_uuid': 'no label', '_submissio': 'no label', '_index': 'no label', '_parent_ta': 'no label', '_parent_in': 'no label', '_tags': 'no label', '_notes': 'no label', '_version': 'no label', '_duration': 'no label', '_submitted': 'no label', '_xform_id': 'no label', });
lyr_puntos_wgs84_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});