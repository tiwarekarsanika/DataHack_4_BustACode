import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Bar } from 'react-chartjs-2';

function Dashboard() {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Access the local CSV file
                const response = await fetch('/assets/extracted_data_with_gender.csv');
                const data = await response.text();

                Papa.parse(data, {
                    header: true,
                    dynamicTyping: true,
                    complete: function (results) {
                        const parsedData = results.data;

                        const domainChargeMap = {};
                        parsedData.forEach((row) => { // Use parsedData, not data
                            const domain = row['domains'];
                            const charge = parseFloat(row['charge']);
                            if (domain && !isNaN(charge)) {
                                if (!domainChargeMap[domain]) {
                                    domainChargeMap[domain] = 0;
                                }
                                domainChargeMap[domain] += charge;
                            }
                        });

                        const domains = Object.keys(domainChargeMap);
                        const charges = domains.map((domain) => domainChargeMap[domain]);

                        // Set up the chart data
                        setChartData({
                            labels: domains,
                            datasets: [
                                {
                                    label: 'Charge by Domain',
                                    data: charges,
                                },
                            ],
                        });
                    },
                });
            } catch (error) {
                console.error('Error fetching CSV:', error);
            }
        };

    }, []);

    return (
        <div>
            <h2>Lawyer Charges by Domain</h2>
            <div style={{ height: '400px', width: '80%' }}>
                <Bar
                    data={chartData}
                    options={{
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Charge',
                                },
                            },
                        },
                    }}
                />
            </div>
        </div>
    );

}

export default Dashboard;
