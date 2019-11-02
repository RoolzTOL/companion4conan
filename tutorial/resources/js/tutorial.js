Tutorial = {
    _i18n: {
        'fr': {
            'settings_message': "L'application a été configurée en français",
            'settings_switch': "Switch to english",
            'settings_continue': "Merci",
            
            'extensions_message': "En indiquant les éléments du jeu que vous possédez vous disposerez d'une application personnalisée",
            'extensions_act': "Personnaliser",
            'extensions_continue': "Par défaut"
        },
        'en': {
            'settings_message': "The application was configured in english",
            'settings_switch': "Passer en français",
            'settings_continue': "Thank you",
            
            'extensions_message': "By specifying the game elements you own you will obtnain a customized application",
            'extensions_act': "Customize",
            'extensions_continue': "Default"
        }
    },
    
    init: function() {
        if (localStorage.getItem("Language") == null)
        {
            window.setTimeout(function() {
                ConanAbout.actionToast("tutorial-settings", Tutorial._i18n[Language].settings_message, [{ text: Tutorial._i18n[Language].settings_switch, act: "Tutorial._swithLanguage()" }, { text: Tutorial._i18n[Language].settings_continue, act: "Tutorial._keepLanguage()" }]);
            }, 1000);
        }
        else if (!localStorage.getItem("Extensions"))
        {
            window.setTimeout(function() {
                ConanAbout.actionToast("tutorial-extensions", Tutorial._i18n[Language].extensions_message, [{ text: Tutorial._i18n[Language].extensions_continue, act: "Tutorial._ignoreCustom()" }, { text: Tutorial._i18n[Language].extensions_act, act: "Tutorial._custom()" }]);
            }, 1000);
        }
    },
    _custom: function() {
        localStorage.setItem("Extensions", JSON.stringify(Extensions));
        ConanAbout.hideActionToast();
        ConanAbout._custom();
        Tutorial.init();
    },
    _ignoreCustom: function() {
        localStorage.setItem("Extensions", JSON.stringify(Extensions));
        ConanAbout.hideActionToast();
        $(document.body).append("<div class=\"blinkmenu\"></div>");
        Tutorial.init();
    },
    _swithLanguage: function() {
        localStorage.setItem("Language", Language == 'fr' ? 'en' : 'fr');
        $(document.body).append("<div class=\"blinkmenu\"></div>");
        window.setTimeout("window.location.reload(true);", 1000);
    },
    _keepLanguage: function() {
        localStorage.setItem("Language", Language);
        ConanAbout.hideActionToast();
        $(document.body).append("<div class=\"blinkmenu\"></div>");
        Tutorial.init();
    }
}

$().ready(Tutorial.init);