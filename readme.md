# Recharts Legend Scrollable

[![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://recharts-legend-scrollable.vercel.app/)
[![npm version](https://badge.fury.io/js/recharts-legend-scrollable.svg)](https://badge.fury.io/js/recharts-legend-scrollable)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

## Introduction

Recharts Legend Scrollable is an addon library for [recharts](https://www.npmjs.com/package/recharts/) that adds custom legend element

The purpose of this library is to prevent overflowing legend with elements so it always fits the chart size

## Examples

```jsx
<LineChart
  width={400}
  height={400}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
  <LegendScrollable />
</LineChart>
```

## Installation

### npm

To add Recharts Legend Scrollable into your project, execute

```sh
$ npm install recharts recharts-legend-scrollable
```

## Demo
Storybook demo available here https://recharts-legend-scrollable.vercel.app/

## Storybook

To run it locally, execute

```sh
$ npm run[-script] storybook
```

and then browse to http://localhost:6006.

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015-2023 Recharts Group.