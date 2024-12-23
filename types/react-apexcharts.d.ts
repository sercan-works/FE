declare module 'react-apexcharts' {
    import { Component } from 'react';
    import { ApexOptions } from 'apexcharts';
  
    interface Props {
        type?: string;
        series: any;
        width?: string | number;
        height?: string | number;
        options?: ApexOptions;
    }
  
    class ReactApexChart extends Component<Props> {}
    export default ReactApexChart;
} 