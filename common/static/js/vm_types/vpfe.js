draw2d.shape.node.vpfe = draw2d.shape.node.wistarSetChild.extend({
    NAME: "draw2d.shape.node.vpfe",
    VCPU: 3,
    VRAM: 8192,
    INTERFACE_PREFIX: "ge-0/0/",
    MANAGEMENT_INTERFACE_PREFIX: "fxp",
    MANAGEMENT_INTERFACE_INDEX: 0,
    DOMAIN_CONFIGURATION_FILE: "vmx_vpfe_config.xml",
    ICON_WIDTH: 50,
    ICON_HEIGHT: 40,
    ICON_FILE: "/static/images/vmx.png",
    COMPANION_TYPE: "draw2d.shape.node.vre",
    COMPANION_INTERFACE_LIST: ["1"],

});
