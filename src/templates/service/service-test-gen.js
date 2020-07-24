"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTestGen = void 0;
const test_gen_model_1 = require("../test-gen.model");
const genese_tests_config_1 = require("../../../genese-tests.config");
const template_data_model_1 = require("../../models/template-data.model");
const CommonTestGen = require('../../common-test-gen.js');
class ServiceTestGen extends test_gen_model_1.TestGen {
    constructor(tsPath) {
        super(tsPath);
        this.template = genese_tests_config_1.config.templates.injectable;
        // this.imports = CommonTestGen.getImports.bind(this)();
        // this.angularType = CommonTestGen.getAngularType.bind(this)().toLowerCase();
        // this.klassProperties = CommonTestGen.getKlassProperties.bind(this)();
        this.klassGetters = this.getKlassGetters();
        this.klassSetters = this.getKlassSetters();
        this.klassMethods = this.getKlassMethods();
        // this.getProviderMocks = CommonTestGen.getProviderMocks.bind(this);
        // this.getGenerated = CommonTestGen.getGenerated.bind(this);
        // this.writeGenerated = CommonTestGen.writeGenerated.bind(this);
    }
    getData() {
        var _a, _b;
        const ejsData = new template_data_model_1.TemplateData();
        ejsData.className = (_b = (_a = this.klass.node) === null || _a === void 0 ? void 0 : _a.getName()) !== null && _b !== void 0 ? _b : 'Unknown';
        ejsData.importMocks = this.getImportMocks();
        ejsData.inputMocks = this.getInputMocks();
        ejsData.outputMocks = this.getOutputMocks();
        ejsData.componentProviderMocks = this.getComponentProviderMocks();
        ejsData.selector = this.getDirectiveSelector();
        ejsData.ctorParamJs = undefined; // declarition only; will be set from mockData
        ejsData.providerMocks = undefined; //  declarition only; will be set from mockData
        return ejsData;
    }
}
exports.ServiceTestGen = ServiceTestGen;
