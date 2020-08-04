var geojson = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

    "features": [
        {
            "type": "Feature",
            "properties": {
                "id": 1,
                "Nombre": "Plaza Mayor",
                "Estilo": "Barroco",
                "Siglo": "XVIII"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-5.664112383714246, 40.965008439481124]
            }
        },
        { "type": "Feature", "properties": { "id": 2, "Nombre": "Iglesia de San Martín", "Estilo": "Románico", "Siglo": "XII" }, "geometry": { "type": "Point", "coordinates": [-5.664499515072894, 40.964407360286835] } },
        { "type": "Feature", "properties": { "id": 3, "Nombre": "Palacio de Maldonado de Morille", "Estilo": "Plateresco", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.665769653912498, 40.963816129508999] } },
        { "type": "Feature", "properties": { "id": 5, "Nombre": "Casa de los Solis", "Estilo": "Plateresco", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.665743555169218, 40.96395408383092] } },
        { "type": "Feature", "properties": { "id": 4, "Nombre": "Convento de la Madre de Dios", "Estilo": "Renacimiento", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.666100237994039, 40.964236560828404] } },
        { "type": "Feature", "properties": { "id": 6, "Nombre": "Iglesia de San benito", "Estilo": "Gótico", "Siglo": "XV" }, "geometry": { "type": "Point", "coordinates": [-5.666117637156225, 40.963822698768958] } },
        { "type": "Feature", "properties": { "id": 8, "Nombre": "La Clerecía", "Estilo": "Barroco", "Siglo": "XVII" }, "geometry": { "type": "Point", "coordinates": [-5.666465620399952, 40.962797886308792] } },
        { "type": "Feature", "properties": { "id": 7, "Nombre": "Universidad Pontifícia", "Estilo": "Barroco", "Siglo": "XVII" }, "geometry": { "type": "Point", "coordinates": [-5.666413422913393, 40.963113214914557] } },
        { "type": "Feature", "properties": { "id": 12, "Nombre": "Palacio de los Abarca Maldonado- Museo Provincial de Bellas Artes", "Estilo": "Gótico", "Siglo": "XV" }, "geometry": { "type": "Point", "coordinates": [-5.667953248766887, 40.961786196861112] } },
        { "type": "Feature", "properties": { "id": 13, "Nombre": "Universidad", "Estilo": "Plateresco", "Siglo": "XV" }, "geometry": { "type": "Point", "coordinates": [-5.667170286468501, 40.961424875442894] } },
        { "type": "Feature", "properties": { "id": 19, "Nombre": "Puente Romano", "Estilo": "Roma", "Siglo": "I" }, "geometry": { "type": "Point", "coordinates": [-5.66965836666115, 40.958494814159351] } },
        { "type": "Feature", "properties": { "id": 21, "Nombre": "Casa Lis", "Estilo": "Modernista", "Siglo": "XX" }, "geometry": { "type": "Point", "coordinates": [-5.666848401968053, 40.959440857132954] } },
        { "type": "Feature", "properties": { "id": 23, "Nombre": "Catedral Nueva", "Estilo": "Gótico", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.665978443858735, 40.960636530937165] } },
        { "type": "Feature", "properties": { "id": 24, "Nombre": "Catedral Vieja", "Estilo": "Románico", "Siglo": "XII" }, "geometry": { "type": "Point", "coordinates": [-5.666657011184002, 40.960478860906079] } },
        { "type": "Feature", "properties": { "id": 27, "Nombre": "Palacio de Anaya", "Estilo": "Neoclásico", "Siglo": "XVIII" }, "geometry": { "type": "Point", "coordinates": [-5.665552164385169, 40.961582543214092] } },
        { "type": "Feature", "properties": { "id": 28, "Nombre": "Palacio de Fonseca (La Salina)", "Estilo": "Renacimiento", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.664342922613217, 40.963014674887091] } },
        { "type": "Feature", "properties": { "id": 29, "Nombre": "Torre del Clavero", "Estilo": "Militar", "Siglo": "XV" }, "geometry": { "type": "Point", "coordinates": [-5.663316372044222, 40.962791316946827] } },
        { "type": "Feature", "properties": { "id": 37, "Nombre": "Iglesia de Santo Tomas Cantuariense", "Estilo": "Románico", "Siglo": "XII" }, "geometry": { "type": "Point", "coordinates": [-5.660201922012863, 40.960163519713966] } },
        { "type": "Feature", "properties": { "id": 40, "Nombre": "Convento de San Esteban", "Estilo": "Plateresco", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.662811796340817, 40.960557695968703] } },
        { "type": "Feature", "properties": { "id": 42, "Nombre": "Convento de las Dueñas", "Estilo": "Renacimiento", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.663333771206408, 40.961148955936991] } },
        { "type": "Feature", "properties": { "id": 44, "Nombre": "Convento de Santa Clara", "Estilo": "Barroco", "Siglo": "XVIII" }, "geometry": { "type": "Point", "coordinates": [-5.660454209864565, 40.961937294322176] } },
        { "type": "Feature", "properties": { "id": 45, "Nombre": "Palacio de Monterrey", "Estilo": "Renacimiento", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.666735307413841, 40.965156245001715] } },
        { "type": "Feature", "properties": { "id": 46, "Nombre": "Convento de las Agustinas", "Estilo": "Barroco", "Siglo": "XVII" }, "geometry": { "type": "Point", "coordinates": [-5.666822303224773, 40.964775234542067] } },
        { "type": "Feature", "properties": { "id": 47, "Nombre": "Convento de los Capuchinos", "Estilo": "Barroco", "Siglo": "XVIII" }, "geometry": { "type": "Point", "coordinates": [-5.668057643740005, 40.965267920064399] } },
        { "type": "Feature", "properties": { "id": 48, "Nombre": "Colegio Mayor Arzobispo Fonseca", "Estilo": "Renacimiento", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.669832358283013, 40.965537253261594] } },
        { "type": "Feature", "properties": { "id": 51, "Nombre": "Convento de las Ursulas", "Estilo": "Gótico", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.667205084792873, 40.966043071173367] } },
        { "type": "Feature", "properties": { "id": 61, "Nombre": "Iglesia del Carmen", "Estilo": "Barroco", "Siglo": "XVIII" }, "geometry": { "type": "Point", "coordinates": [-5.664788776144243, 40.966708182981137] } },
        { "type": "Feature", "properties": { "id": 62, "Nombre": "Casa de Doña Maria La Brava", "Estilo": "Gótico", "Siglo": "XV" }, "geometry": { "type": "Point", "coordinates": [-5.664980166928292, 40.966819855417519] } },
        { "type": "Feature", "properties": { "id": 73, "Nombre": "Iglesia de Sancti Spiritus", "Estilo": "Renacimiento", "Siglo": "XVI" }, "geometry": { "type": "Point", "coordinates": [-5.659203645082421, 40.965341822575496] } },
        { "type": "Feature", "properties": { "id": 59, "Nombre": "Iglesia de San Marcos", "Estilo": "Románico", "Siglo": "XII" }, "geometry": { "type": "Point", "coordinates": [-5.663814423061808, 40.969664154353104] } }
    ]
}
