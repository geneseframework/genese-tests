import { TestGen } from '../test-gen.model';

const CommonTestGen = require('../common-test-gen.js');

export class InjectableTestGen extends TestGen {


    constructor (tsPath, config) {
        super(tsPath, config);
        // this.typescript = fs.readFileSync(path.resolve(tsPath), 'utf8');
        this.template = config.templates.injectable;

        console.log('INJECTABLEEE PATHHH', tsPath)
        // this.klass = CommonTestGen.getKlass.bind(this)();
        // console.log('INJECTABLEEE this.klass', this.klass)
        // this.imports = CommonTestGen.getImports.bind(this)();
        // this.angularType = CommonTestGen.getAngularType.bind(this)().toLowerCase();
        // this.klassProperties = CommonTestGen.getKlassProperties.bind(this)();
        this.klassGetters = this.getKlassGetters();
        this.klassSetters = this.getKlassSetters();
        // this.klassMethods = this.getKlassMethods();
        // this.getProviderMocks = CommonTestGen.getProviderMocks.bind(this);
        // this.getGenerated = CommonTestGen.getGenerated.bind(this);
        // this.writeGenerated = CommonTestGen.writeGenerated.bind(this);
    }

    getData () {
        console.log('KINDDDD', this.klass?.node?.getKindName());
        const ejsData = {
            // className: 'Unknown',
            className: this.klass.node?.getName() ?? 'Unknown',
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

            ctorParamJs: undefined, // declarition only, will be set from mockData
            providerMocks: undefined, //  declarition only, will be set from mockData
            accessorTests: undefined, //  declarition only, will be set from mockData
            functionTests: undefined //  declarition only, will be set from mockData
        }

        return {ejsData};
    }

}

