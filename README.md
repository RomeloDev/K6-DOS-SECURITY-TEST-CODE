# K6 DoS Security Test

![k6](https://img.shields.io/badge/k6-Performance_Testing-7D64FF?logo=k6&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![Security](https://img.shields.io/badge/Security-Testing-red)
![Status](https://img.shields.io/badge/Status-Experimental-orange)

## Overview

A JavaScript-based API stress testing and security assessment project powered by Grafana k6.

This project is designed to evaluate the performance, stability, availability, and resilience of API endpoints under simulated concurrent user traffic in authorized testing environments.

It focuses on understanding how backend applications handle increased workloads and identifying potential weaknesses related to Denial-of-Service (DoS) conditions.

## Objectives

- Evaluate API performance and reliability.
- Identify potential performance bottlenecks.
- Assess application resilience under concurrent workloads.
- Evaluate rate-limiting and throttling mechanisms.
- Monitor HTTP request failure rates.
- Measure API response times.
- Identify opportunities for backend security improvements.

## Features

- Virtual user simulation
- Stage-based workload configuration
- HTTP POST request testing
- JSON payload handling
- HTTP response validation
- Performance threshold evaluation
- Automated performance metrics collection

## Technologies Used

| Technology | Purpose |
|---|---|
| Grafana k6 | Load and performance testing |
| JavaScript | Test script development |
| HTTP REST API | API communication |
| JSON | Request payload format |
| Git | Version control |
| GitHub | Source code management |

## Project Structure

```
K6-DOS-SECURITY-TEST-CODE/
├── dos.js       # Main security stress testing script
└── README.md    # Project documentation
```

## Prerequisites

- Grafana k6
- Basic knowledge of JavaScript and REST APIs
- An isolated and authorized testing environment
- Application and server monitoring tools

Official k6 documentation: https://grafana.com/docs/k6/latest/

## Testing Methodology

The testing script uses a stage-based approach to simulate concurrent requests and evaluate application behavior.

The assessment involves three general phases:

1. **Ramp-up** — Gradually introduce simulated user traffic.
2. **Stress assessment** — Observe application performance within approved testing limits.
3. **Ramp-down** — Reduce traffic and observe application recovery.

The existing script contains an experimental, aggressive workload configuration. It must be reviewed and reduced to approved limits before execution.

## Performance Thresholds

| Metric | Target |
|---|---|
| HTTP request failure rate | Below 5% |
| 95th percentile response time | Below 500 ms |
| Successful submission status | HTTP 200 or 201 |

These thresholds are initial performance assessment criteria and may require adjustment based on application requirements.

Expected rate-limiting responses, such as HTTP 429, should be evaluated separately when assessing security controls.

## Key Metrics

| Metric | Description |
|---|---|
| `http_reqs` | Total HTTP requests |
| `http_req_duration` | HTTP request duration |
| `http_req_failed` | HTTP request failure rate |
| `iterations` | Completed test iterations |
| `vus` | Active virtual users |
| `checks` | Response validation results |
| `p(95)` | 95th percentile response time |

## Security Assessment Areas

This project supports the assessment of:

- API availability and resilience
- Rate limiting and request throttling
- Server resource utilization
- Database performance
- Backend error handling
- Application recovery
- Protection against excessive requests

## Responsible Usage

This repository is intended exclusively for educational purposes, authorized security assessments, and controlled performance testing.

- Only test systems that you own or have explicit permission to assess.
- Use isolated development or staging environments.
- Use synthetic test data.
- Establish workload limits and emergency stop conditions.
- Avoid exposing internal endpoints, credentials, and sensitive application information.
- Do not perform unauthorized DoS or DDoS attacks.

## Limitations

This project is an experimental testing script, not a comprehensive security auditing framework.

Passing performance thresholds does not guarantee that an application is protected against Denial-of-Service attacks. Additional security controls, infrastructure monitoring, and independent assessments are recommended.

## Future Improvements

- Environment-based API configuration
- Configurable workload limits
- Automated test termination conditions
- Separate load and security testing scenarios
- Grafana dashboard integration
- Detailed performance reporting
- Rate-limiting validation
- Automated regression testing

## Author

**RomeloDev**

GitHub: https://github.com/RomeloDev

## Disclaimer

This project is developed for educational, research, and authorized application security testing purposes only. Users are responsible for ensuring that all testing activities comply with applicable laws and organizational security policies.
