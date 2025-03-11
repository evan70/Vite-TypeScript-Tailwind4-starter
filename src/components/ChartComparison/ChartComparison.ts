import Chart from 'chart.js/auto';
import ApexCharts from 'apexcharts';

export class ChartComparison {
    private chartjs: Chart | null = null;
    private apexchart: ApexCharts | null = null;

    constructor() {
        this.initializeCharts();
        this.handleResize();
    }

    private initializeCharts(): void {
        const sampleData = this.getSampleData();
        this.initializeApexChart(sampleData);
        this.initializeChartJS(sampleData);
    }

    private getSampleData() {
        return {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    name: 'Sales 2023',
                    data: [30, 40, 35, 50, 49, 60]
                },
                {
                    name: 'Sales 2024',
                    data: [45, 60, 55, 70, 65, 80]
                }
            ]
        };
    }

    private initializeApexChart(data: any): void {
        const options = {
            series: data.datasets.map((dataset: any) => ({
                name: dataset.name,
                data: dataset.data
            })),
            chart: {
                type: 'line',
                height: '100%',
                width: '100%',
                animations: {
                    enabled: true
                },
                toolbar: {
                    show: true
                }
            },
            theme: {
                mode: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            xaxis: {
                categories: data.labels
            },
            colors: ['#3b82f6', '#10b981'],
            grid: {
                borderColor: '#90A4AE',
                strokeDashArray: 4
            },
            markers: {
                size: 6
            },
            responsive: [{
                breakpoint: 768,
                options: {
                    chart: {
                        height: '300px'
                    }
                }
            }]
        };

        const chart = new ApexCharts(document.querySelector('#apexchart-container'), options);
        chart.render();
        this.apexchart = chart;
    }

    private initializeChartJS(data: any): void {
        const ctx = document.querySelector('#chartjs-canvas') as HTMLCanvasElement;
        
        this.chartjs = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: data.datasets.map((dataset: any, index: number) => ({
                    label: dataset.name,
                    data: dataset.data,
                    borderColor: index === 0 ? '#3b82f6' : '#10b981',
                    backgroundColor: index === 0 ? '#3b82f680' : '#10b98180',
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 6
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: document.documentElement.classList.contains('dark') ? '#fff' : '#000'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: document.documentElement.classList.contains('dark') ? '#ffffff20' : '#00000020'
                        },
                        ticks: {
                            color: document.documentElement.classList.contains('dark') ? '#fff' : '#000'
                        }
                    },
                    x: {
                        grid: {
                            color: document.documentElement.classList.contains('dark') ? '#ffffff20' : '#00000020'
                        },
                        ticks: {
                            color: document.documentElement.classList.contains('dark') ? '#fff' : '#000'
                        }
                    }
                }
            }
        });
    }

    private handleResize(): void {
        let resizeTimer: NodeJS.Timeout;
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (this.apexchart) {
                    this.apexchart.updateOptions({
                        chart: {
                            width: '100%'
                        }
                    });
                }
                if (this.chartjs) {
                    this.chartjs.resize();
                }
            }, 250);
        });
    }
}