import { TestGen } from '../test-gen.model';
import { config } from '../../../genese-tests.config';
import { TemplateData } from '../../models/template-data.model';

const CommonTestGen = require('../../common-test-gen.js');

export class ServiceTestGen extends TestGen {


    constructor (tsPath) {
        super(tsPath);
        this.template = config.templates.injectable;

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

    getData(): TemplateData {
        const ejsData = new TemplateData();
        ejsData.className = this.klass.node?.getName() ?? 'Unknown';
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

