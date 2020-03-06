var EncyclopediaEquipments = {
    _i18n: {
        'fr': {
            'tab': "Equipe<wbr/>ments",
            'transfertToStudio': "Copier la carte dans le studio",
            'transfertOK': "La carte a été copiée dans le studio des cartes d'équipements",
            'transfertConfirm': "Voulez-vous copier la carte dans le studio ?",
            'from': "Disponible dans :",
            'fromAnd': "<br/>et",
            'card': "exemplaire",
            'cards': "exemplaires",
            'skill': "Compétence :"
        },
        'en': {
            'tab': "Equip<wbr/>ments",
            'transfertToStudio': "Copy the card into the studio",
            'transfertOK': "The card was copied to the equipment cards studio",
            'transfertConfirm': "Do you want to copy the card into the studio?",
            'from': "Available in:",
            'fromAnd': "<br/>and",
            'card': "copy",
            'cards': "copies",
            'skill': "Skill:"
        }
    },
    
    preinit: function()
    {
        Encyclopedia._slides.push({   label: EncyclopediaEquipments._i18n[Language].tab, id: "encyclopedia-equipment", onShow: EncyclopediaEquipments.onShow,  onHide: EncyclopediaEquipments.onHide });
        
        EncyclopediaEquipments._facets = [
            {
                id: 'keyword',
                label: {
                    'fr': "Mot-clé",
                    'en': "Keyword"
                },
                filter: function(item, value)
                {
                    return item.title[Language] && ConanRules._deemphasize(item.title[Language]).indexOf(ConanRules._deemphasize(value)) != -1;
                }
            },
            
            {
                id: 'expansions',
                label: {
                    'fr': "Status",
                    'en': "Status" 
                },
                values: [
                    {
                        id: "yes",
                        label: {
                            'fr': "Possédées",
                            'en': "Owned"
                        }
                    },
                    {
                        id: "no",
                        label: {
                            'fr': "Manquantes",
                            'en': "Missing"
                        }
                    }
                ],
                filter: function(item, selectedValues) {
                    if (selectedValues.length != 1)
                    {
                        return true;
                    }
                    else 
                    {
                        var hasExpansion = ConanAbout._hasExpansion(item.origins); 
                        return hasExpansion && selectedValues[0] == 'yes'
                                || !hasExpansion && selectedValues[0] == 'no'
                    }
                }
            },
            
            {
                id: 'origins',
                label: {
                    'fr': "Origine",
                    'en': "Origin"
                },
                values: (function() {
                    var values = [];
                    for (var i in Encyclopedia.expansions.types)
                    {
                        var type = Encyclopedia.expansions.types[i];
                        
                        for (var j in Encyclopedia.expansions.list)
                        {
                            var expansion = Encyclopedia.expansions.list[j];
                            if (expansion.type == type.id)
                            {
                                values.push({
                                    id: expansion.id,
                                    label: expansion.short
                                });
                            }
                        }
                    }
                    return values;
                })(),
                filter: function(item, selectedValues) {
                    var origins = item.origins.slice(0);
                    for (var i in Encyclopedia.expansions.types)
                    {
                        var startRemove = false;

                        var type = Encyclopedia.expansions.types[i];
                        
                        for (var j in Encyclopedia.expansions.list)
                        {
                            var expansion = Encyclopedia.expansions.list[j];
                            if (expansion.type == type.id)
                            {
                                if (startRemove)
                                {
                                    origins = origins.filter(o => o != expansion.id);
                                }
                                else if (origins.indexOf(expansion.id) != -1)
                                {
                                    startRemove = true;
                                }
                            }
                        }
                    }

                    return origins.filter(v => selectedValues.indexOf(v) != -1).length > 0;
                }
            },

            
            {
                id:'type',
                label: {
                    'fr': "Type",
                    'en': "Kind"
                },
                values: [
                    {
                        id: "melee",
                        label: {
                            'fr': "Corps-à-corps",
                            'en': "Melee"
                        }
                    },
                    {
                        id: "ranged",
                        label: {
                            'fr': "Distance",
                            'en': "Ranged"
                        }
                    },
                    {
                        id: "manipulation",
                        label: {
                            'fr': "Manipulation",
                            'en': "Manipulation"
                        }
                    },
                    {
                        id: "throwable",
                        label: {
                            'fr': "Lançable",
                            'en': "Throwable"
                        }
                    },
                    {
                        id: "area",
                        label: {
                            'fr': "Zone",
                            'en': "Area"
                        }
                    },
                    {
                        id: "guard",
                        label: {
                            'fr': "Défense active",
                            'en': "Guard"
                        }
                    },
                    {
                        id: "armor",
                        label: {
                            'fr': "Défense passive",
                            'en': "Armor"
                        }
                    },
                    {
                        id: "skill",
                        label: {
                            'fr': "Compétence",
                            'en': "Skill"
                        }
                    },
                    {
                        id: "other",
                        label: {
                            'fr': "Autre",
                            'en': "Other"
                        }
                    }
                ],
                filter: function(item, selectedValues) {
                    
                    return (selectedValues.indexOf('melee')!=-1 && item.melee['0'] != "none")
                        || (selectedValues.indexOf('ranged')!=-1 && item.ranged['0'] != "none")
                        || (selectedValues.indexOf('throwable')!=-1 && item.ranged['0'] != "none" && item.ranged['throwable'])
                        || (selectedValues.indexOf('manipulation')!=-1 && item.manipulation['0'] != "none")
                        || (selectedValues.indexOf('area')!=-1 && item.manipulation['0'] != "none" && item.manipulation['explosive'])
                        || (selectedValues.indexOf('guard')!=-1 && item.active['0'] != "none")
                        || (selectedValues.indexOf('armor')!=-1 && item.passive['0'] != "none")
                        || (selectedValues.indexOf('skill')!=-1 && item.skills && item.skills['0'] != "none")
                        || (selectedValues.indexOf('other')!=-1 && item.melee['0'] == "none" && item.ranged['0'] == "none" && item.manipulation['0'] == "none" && item.active['0'] == "none" && item.passive['0'] == "none" && (!item.skills || item.skills['0'] == "none"));
                }
            },

            {
                id:'empty',
                label: {
                    'fr': "Cartes",
                    'en': "Cards"
                },
                values: [
                    {
                        id: "no",
                        label: {
                            'fr': "Remplies",
                            'en': "Filled"
                        },
                        defaults: true
                    },
                    {
                        id: "yes",
                        label: {
                            'fr': "Vierges",
                            'en': "Blank"
                        }
                    }
                ],
                filter: function(item, selectedValues) {
                    var nodata = item.title[Language] == ''
                                && !item.encumbrance
                                && item.melee['0'] == "none"
                                && item.ranged['0'] == "none"
                                && item.manipulation['0'] == "none"
                                && item.active['0'] == "none"
                                && item.passive['0'] == "none"
                                && !item.image;
                    
                    return (nodata && (selectedValues.indexOf('yes')!=-1))
                        || (!nodata && (selectedValues.indexOf('no')!=-1));
                }
            }
        ]
    },
    
    init: function() 
    {
        $("#encyclopedia-equipment").append(Encyclopedia.displaySearchEngine(EncyclopediaEquipments._facets, "EncyclopediaEquipments.displayEquipments()", "ee"));
        $("#encyclopedia-equipment").append("<div id='encyclopedia-equipment-wrapper'></div>");
        EncyclopediaEquipments.displayEquipments();
    },
    
    updateFacets: function()
    {
        for (var i in EncyclopediaEquipments._facets)
        {
            var facet = EncyclopediaEquipments._facets[i];
            if (facet.values)
            {
                var nonEmptyFacets = 0;
                for (var v in facet.values)
                {
                    var value = facet.values[v];
                    
                    var items = Encyclopedia.equipments.list.filter(EncyclopediaEquipments._filter(facet, value));
                    var count = items.length;
                    
                    $("#ee-" + facet.id + "-" + value.id).parent().attr('data-count', count);
                    if (count) nonEmptyFacets++;
                }                
                $("#ee-" + facet.id).attr("data-count", nonEmptyFacets);
            }
        }
    },
    
    _filter: function(forcedFacet, forcedValue)
    {
        return function(e) {
            for (var i in EncyclopediaEquipments._facets)
            {
                var facet = EncyclopediaEquipments._facets[i];
                
                var selectedValues = [];
                if (forcedFacet && facet.id == forcedFacet.id)
                {
                    selectedValues.push(forcedValue.id);
                }
                else
                {
                    if (facet.values)
                    {
                        for (var v in facet.values)
                        {
                            var value = facet.values[v];
                            
                            if ($("#ee-" + facet.id + "-" + value.id)[0].checked)
                            {
                                selectedValues.push(value.id);
                            }
                        }
                    }
                    else
                    {
                        selectedValues.push($("#ee-" + facet.id + "-input").val());
                    }
                }
                
                if ((facet.values
                    && selectedValues.length > 0
                    && !facet.filter(e, selectedValues))
                    
                    ||
                    
                    (!facet.values && selectedValues[0] && !facet.filter(e, selectedValues[0])))
                {
                    return false;
                }
            }
            
            return true;
        }
    },
    
    displayEquipments: function()
    {
        EncyclopediaEquipments.updateFacets();
        
        var equipments = "";
        
        Encyclopedia.equipments.list.sort(function(s1, s2) { return !s2.title[Language] ? 1 : (!s1.title[Language] ? -1 : s1.title[Language].toLowerCase().localeCompare(s2.title[Language].toLowerCase())); })

        var equipmentList = Encyclopedia.equipments.list.filter(EncyclopediaEquipments._filter());
        var ignoredPrevious = 0;
        for (var i in equipmentList)
        {
            i = parseInt(i);
            var equipment = equipmentList[i];
            
            if (i < equipmentList.length - 1
                && equipmentList[i+1].id == equipment.id)
            {
                ignoredPrevious++;
                continue;
            }
            
            equipment = equipmentList[i - ignoredPrevious];
            
            equipments += "<a href='javascript:void(0)' data-count='" + (ignoredPrevious+1) + "' onclick='EncyclopediaEquipments.openEquipment(\"" + equipment.id + "\")'>";
            equipments += CardEquipment._cardCode(EncyclopediaEquipments._convertEquipmentToStudio(equipment));
            equipments += "</a>";
            
            ignoredPrevious = 0;
        }
        
        $("#encyclopedia-equipment-wrapper").html(equipments);
    },
    
    _convertEquipmentToStudio: function(equipment, i)
    {
        i = i ? i : 0;
        return {
            id: equipment.id + "-" + Math.random(),
            name: equipment.title[Language],
            encumbrance: equipment.encumbrance,
            movement: equipment.movement || "",
            melee: equipment.melee,
            ranged: equipment.ranged,
            manipulation: equipment.manipulation,
            active: equipment.active,
            passive: equipment.passive,
            skills: equipment.skills || { 0: "none", 1: "none" },
            image: equipment.image ? Version + "/" + equipment.image : null,
            imagelocation: {x: "50", y: "50"},
            imagezoom: "100",
            imagerotation: "0"
        };
    },
    
    _findEquipmentsById: function(id)
    {
        var equipments = [];
        
        for (var i in Encyclopedia.equipments.list)
        {
            var equipment = Encyclopedia.equipments.list[i];
            if (equipment.id == id)
            {
                equipments.push(equipment);
            }
        }
        
        return equipments;
    },

    _findEquipmentsBySkill: function(id)
    {
        id = ConanRules._findSkillById(id).type + "/" + id;
        
        var equipments = [];
        var equipmentsIds = {};
        
        for (var i in Encyclopedia.equipments.list)
        {
            var equipment = Encyclopedia.equipments.list[i];
            if (equipment.skills
                && !equipmentsIds[id]
                && (equipment.skills[0] == id
                    || 
                    (equipment.skills[0] != "none" && equipment.skills[1] == id)))
            {
                equipments.push(equipment);
                equipmentsIds[id] = true;
            }
        }
        
        return equipments;
    },

    onShow: function() {
    },
    
    onHide: function() {
    },

    openEquipment: function(id) {
        var equipments = EncyclopediaEquipments._findEquipmentsById(id);
        var displayEquipments = [];
        
        var images = {};
        var originsCount = {};
        for (var e in equipments)
        {
            var equipment = equipments[e];
            
            var origins = Encyclopedia._removeExtraExpansion(equipment.origins.slice());
            for (var i in origins)
            {
                var origin = origins[i];
                originsCount[origin] = originsCount[origin] ? originsCount[origin]+1 : 1;
            }
            
            if (!images[equipment.image])
            {
                images[equipment.image] = true;
                displayEquipments.push(equipment);
            }
        }
        
        var originString = "";
        for (var i in originsCount)
        {
            if (originString) originString += " " + EncyclopediaEquipments._i18n[Language].fromAnd + " ";
            originString += Encyclopedia._getOrigin(i) + " (" + originsCount[i] + " " + (originsCount[i] == 1 ? EncyclopediaEquipments._i18n[Language].card : EncyclopediaEquipments._i18n[Language].cards) + ")";
        }
        
        var c = "";
        for (var e in displayEquipments)
        {
            var equipment = displayEquipments[e]; 
            c += CardEquipment._cardCode(EncyclopediaEquipments._convertEquipmentToStudio(equipment, i));
        }
        
        Nav.dialog(equipment.title[Language] || "",
            "<div class='equipmentdetails'>" 
                + c
                + "<div class='from'>" + EncyclopediaEquipments._i18n[Language].from + " "
                    + originString
                + "</div>"
                + "<div class='skill'>" 
                    + EncyclopediaEquipments._i18n[Language].skill 
                        + " " + (equipment.skills && equipment.skills[0] != 'none' ? 
                            ( 
                                ConanRules._linkToSkill(equipment.skills[0]) 
                                + (equipment.skills[1] != 'none' ? ConanRules._linkToSkill(equipment.skills[1]) : "")
                            ) : "-")
                + "</div>" 
            + "</div>",
            null,
            [{
                label: EncyclopediaEquipments._i18n[Language].transfertToStudio,
                icon: "encyclopedia-equipment-tostudio",
                fn: "EncyclopediaEquipments._transfert('" + id + "');"
            }]
        );
    },
    
    _transfert: function(id) {
        if (confirm(EncyclopediaEquipments._i18n[Language].transfertConfirm))
        {
            var cards = JSON.parse(localStorage.getItem("StudioEquipmentCards")) || [];
            
            var images = {};
            
            var equipments = EncyclopediaEquipments._findEquipmentsById(id);
            for (var i in equipments)
            {
                var equipment = equipments[i];
                
                if (images[equipment.image])
                {
                    continue;
                }
                
                images[equipment.image] = true;
                var studioEquipment = EncyclopediaEquipments._convertEquipmentToStudio(equipment);
                cards.push(studioEquipment);
            }
            
            localStorage.setItem("StudioEquipmentCards", JSON.stringify(cards));
            
            CardEquipment._displayCards();
            
            Nav.switchTo($("*[for=studio")[0]);
            $("#studio .nav-wrapper").slick('slickGoTo', $("#equipment").index());
            Nav.closeDialog();
            $("#equipment").animate({ scrollTop: $('#equipment > *:last()').position().top },500);
            
            ConanAbout.warnToast(EncyclopediaEquipments._i18n[Language].transfertOK)
        }
    },
    
    _linkToEquipment: function(id) {
        return "<a href='javascript:void(0)' onclick='Nav.closeDialog(); EncyclopediaEquipments.openEquipment(\"" + id + "\")'>" + EncyclopediaEquipments._findEquipmentsById(id)[0].title[Language] + "</a>";
    }
}
