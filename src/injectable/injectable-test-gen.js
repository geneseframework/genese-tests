"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectableTestGen = void 0;
const test_gen_model_1 = require("../test-gen.model");
const CommonTestGen = require('../common-test-gen.js');
class InjectableTestGen extends test_gen_model_1.TestGen {
    constructor(tsPath, config) {
        super(tsPath, config);
        // this.typescript = fs.readFileSync(path.resolve(tsPath), 'utf8');
        this.template = config.templates.injectable;
        console.log('INJECTABLEEE PATHHH', tsPath);
        // this.klass = CommonTestGen.getKlass.bind(this)();
        // console.log('INJECTABLEEE this.klass', this.klass)
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
        var _a, _b, _c, _d;
        console.log('KINDDDD', (_b = (_a = this.klass) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.getKindName());
        const ejsData = {
            // className: 'Unknown',
            className: (_d = (_c = this.klass.node) === null || _c === void 0 ? void 0 : _c.getName()) !== null && _d !== void 0 ? _d : 'Unknown',
            // className: this.klass.node.name.escapedText,
            importMocks: this.getImportMocks(),
            inputMocks: this.getInputMocks(),
            outputMocks: this.getOutputMocks(),
            componentProviderMocks: this.getComponentProviderMocks(),
            selector: this.getDirectiveSelector(),
            // importMocks: CommonTestGen.getImportMocks.bind(this)(),
            // inputMocks: CommonTestGen.getInputMocks.bind(this)(),
            // outputMocks: CommonTestGen.getOutputMocks.bind(this)(),
            // componentProviderMocks: CommonTestGen.getComponentProviderMocks.bind(this)(),
            // selector: CommonTestGen.getDirectiveSelector.bind(this)(),
            ctorParamJs: undefined,
            providerMocks: undefined,
            accessorTests: undefined,
            functionTests: undefined //  declarition only, will be set from mockData
        };
        return { ejsData };
    }
}
exports.InjectableTestGen = InjectableTestGen;
