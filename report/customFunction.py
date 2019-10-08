import pymysql

def getZipData(rptId:int):
    rptId = 1
    finalData = []
    db = pymysql.connect("localhost","root","jcl123","saidi" )
    cursor = db.cursor()
#    --------------------------<pie chart>---------------------------------------------------------
    sql_pie = 'SELECT * FROM saidi.v_pie_chart  WHERE report_id = ' + str(rptId) + ' ORDER BY odd, pie_series_id'
    cursor.execute(sql_pie)
#    report_id, pie_id, type, odd, chapter, chapter_name, title_text, series_name, series_lable_normal, pie_series_id, pie_series_name, pie_series_data
    result = cursor.fetchall()
    resultD = {}
    
    for r in result:
        if not r[3] in resultD.keys():
            resultD[r[3]] = [r, ]
        else:
            resultD[r[3]].append(r)
    for k in resultD.keys():
        val = resultD[k]
        chart_pie_data = {
                'title_text': val[0][6],
                'series_name': val[0][7],
                'series_label_normal': val[0][8]
                }
        series_data = []
        for v in val:
            series_data.append({'value': v[11], 'name': v[10]})
        chart_pie_data['series_data'] = series_data
        chart_pie_option = set_chart_option('pie', chart_pie_data)
        
        finalData.append([k, 3, chart_pie_option, val[0][1], val[0][4], val[0][5], 0])
#    --------------------------</pie chart>---------------------------------------------------------   
        
        
#    --------------------------<txt>---------------------------------------------------------
    sql_txt = 'SELECT * FROM saidi.report_report_maincontent_and_title WHERE report = ' + str(rptId) + ' ORDER BY odd'
    cursor.execute(sql_txt)
#    id, type, odd, detail, report, capter, captername
    result = cursor.fetchall()
    resultD = {}
    
    for r in result:
        if not r[2] in resultD.keys():
            resultD[r[2]] = [r, ]
        else:
            resultD[r[2]].append(r)
    for k in resultD.keys():
        val = resultD[k]

        finalData.append([k, val[0][1], val[0][3], val[0][0], val[0][5], val[0][6], 0])
#    --------------------------</txt>---------------------------------------------------------   

#    --------------------------<form>---------------------------------------------------------
    sql_form = 'SELECT * FROM saidi.v_form_chart WHERE report_id = ' + str(rptId) + ' ORDER BY form_id, row_order, column_order'
    cursor.execute(sql_form)
#    form_id, type, odd, title, chapter, chaptername, report_id, form_data_id, content, row_order, column_order
    result = cursor.fetchall()
    resultD = {}
    
    for r in result:
        if not r[2] in resultD.keys():
            resultD[r[2]] = [r, ]
        else:
            resultD[r[2]].append(r)
    
    for k in resultD.keys():
        val = resultD[k]
        tableContext = [[val[0][3]], ]
        tableRows = {}
        for v in val:
            if not v[9] in tableRows.keys():
                tableRows[v[9]] = [v, ]
            else:
                tableRows[v[9]].append(v)
        for kk in tableRows.keys():
            cells = tableRows[kk]
            thisRow = []
            for cell in cells:
                thisRow.append(cell[8])
            tableContext.append(thisRow)
        
        finalData.append([k, 4, tableContext, val[0][0], val[0][4], val[0][5], 0])
#    --------------------------</form>---------------------------------------------------------           

#    --------------------------<bar chart>---------------------------------------------------------
    sql_bar = 'SELECT * FROM saidi.v_bar_chart WHERE report_id = ' + str(rptId) + ' ORDER BY odd, bar_series_data_id, chart_bar_xaxis_id, chart_bar_yaxis_id;'
    cursor.execute(sql_bar)
#    type, odd, chapter, chapter_name, title_text, report_id, bar_series_id, bar_series_name, bar_series_type, yAxisIndex, chart_bar_id, bar_series_data_id, bar_series_data_data, chart_bar_series_id, chart_bar_xaxis_id, chart_bar_xaxis_xAxis_item, chart_bar_yaxis_id, chart_bar_yaxis_name, chart_bar_yaxis_min, chart_bar_yaxis_max, chart_bar_yaxis_axisLabel_formatter
    result = cursor.fetchall()
    resultD = {}
    
    for r in result:
        if not r[1] in resultD.keys():
            resultD[r[1]] = [r, ]
        else:
            resultD[r[1]].append(r)

#    单个chartbar
    for k in resultD.keys():
        val = resultD[k]
        title_text = val[0][4]
        legendD = {}
        xAxisD = {}
        yAxisD = {}
        seriesD = {}
        
        for v in val:
            if not v[6] in legendD.keys():
                legendD[v[6]] = v[7]
            
            if not v[6] in seriesD.keys():
                seriesD[v[6]] = {
                        'name': v[7],
                        'type': v[8],
                        'yAxisIndex': v[9],
                        'data': {v[11]: v[12]}
                    }
            else:
                seriesD[v[6]]['data'][v[11]] = v[12]
            
            if not v[14] in xAxisD.keys():
                xAxisD[v[14]] = v[15]
            
            if not v[16] in yAxisD.keys():
                yy = {'name': v[17], 'min': v[18], 'max': v[19], 'axisLabel_formatter': v[20]}
                yAxisD[v[16]] = yy
        
        legend_data = []
        for kk in legendD.keys():
            legend_data.append(legendD[kk])
        xAxis_data = []
        for kk in xAxisD.keys():
            xAxis_data.append(xAxisD[kk])
        yAxis = []
        for kk in yAxisD.keys():
            yAxis.append(yAxisD[kk])
        series = []
        for kk in seriesD.keys():
            dd = seriesD[kk]['data']
            oneData = []
            for ii in dd.keys():
                oneData.append(dd[ii])
            seriesD[kk]['data'] = oneData
            series.append(seriesD[kk])
        
        chart_bar_data = {
            'title_text': title_text,
            'legend_data':legend_data,
            'xAxis_data':xAxis_data,
            'yAxis': yAxis,
            'series': series
            }
        
        chartBarOption = set_chart_option('bar', chart_bar_data)
        
        finalData.append([k, 3, chartBarOption, val[0][10], val[0][2], val[0][3], 0])
#    --------------------------</bar chart>---------------------------------------------------------        
    cursor.close()
    db.close()
    
    return finalData

def set_chart_option(chart_type, chart_data):
    """
    设置图表的option
    参数：chart_type:图表类型（pie或bar）；chart_data:图表数据包(dic类型)
    :return:
    """

    chart_bar_option = {
        'title': {
            'text': '图3 2014-2018年上市公司营业总收入（单位：亿元）',  # 1、chart_data['title_text'],string
            'left': 'center',
            'textStyle': {
                'fontSize': 15,
                'fontWeight': 'bold'
            }

        },
        'tooltip': {
            # 悬浮框
            'trigger': 'axis',
            'axisPointer': {
                'type': 'cross',
                'crossStyle': {
                    'color': '#999'
                }
            }
        },
        'legend': {
            'data': ['蒸发量', '降水量', '平均温度'],  # 2、chart_data['legend_data'],list
            'bottom': 10
        },
        'xAxis': [
            {
                'type': 'category',
                # 3、chart_data['xAxis_data'],list
                'data': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                'axisPointer': {
                    'type': 'shadow'
                }
            }
        ],
        'yAxis': [
            {
                'type': 'value',
                'name': '水量',  # 4-1、chart_data['yAxis_name'],string
                'min': 0,  # 5-1、chart_data['yAxis_min'],int
                'max': 250,  # 6-1、chart_data['yAxis_max'],int
                'interval': 50,
                'axisLabel': {
                    'formatter': '{value} ml'  # 7-1、chart_data['yAxis_axisLabel_formatter'],string
                }
            },
            {
                'type': 'value',
                'name': '温度',  # 4-1、chart_data['yAxis_1_name'],string
                'min': 0,  # 5-1、chart_data['yAxis_min'],int
                'max': 25,  # 6-1、chart_data['yAxis_max'],int
                'interval': 5,
                'axisLabel': {
                    'formatter': '{value} °C'  # 7-1、chart_data['yAxis_axisLabel_formatter'],string
                }
            }
        ],
        'series': [
            {
                'name': '蒸发量',  # 8-1、chart_data['series_name'],string
                'type': 'bar',  # 9-1、chart_data['series_type'],string
                # 10-1 、chart_data['series_data'],list
                'data': [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                'name': '降水量',  # 8-2、chart_data['series_name'],string
                'type': 'bar',  # 9-2、chart_data['series_type'],string
                # 10-2 、chart_data['series_data'],list
                'data': [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                'name': '平均温度',  # 8-3、chart_data['series_name'],string
                'type': 'line',  # 9-3、chart_data['series_type'],string
                'yAxisIndex': 1,
                # 10-3、chart_data['series_data'],list
                'data': [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    }

    chart_pie_option = {
        'backgroundColor': 'rgba(128, 128, 128, 0)',
        'title': {
            'text': '这里是标题',
            'x': 'center',
            'textStyle': {
                'fontSize': 14,
            },
        },
        'tooltip': {
            'trigger': 'item',
            'formatter': "{a} <br/>{b} : {c} ({d}%)"
        },
        'series': [
            {
                'name': '各产业总值与占比',
                'type': 'pie',
                'radius': 80,
                'center': ['50%', '50%'],
                'label': {
                    'normal': {
                        'formatter': '{b}:\n{c}亿元，\n{d}%',
                    }
                },
                'data': [
                    {'value': 20, 'name': 'name1'},
                    {'value': 30, 'name': 'name2'},
                    {'value': 30, 'name': 'name3'},
                ],
                'itemStyle': {
                    'emphasis': {
                        'shadowBlur': 10,
                        'shadowOffsetX': 0,
                        'shadowColor': 'rgba(0, 0, 0, 0.5)',
                    }
                }
            }
        ]
    }

    if chart_type == 'pie':
        chart_pie_option['title']['text'] = chart_data['title_text']
        chart_pie_option['series'][0]['name'] = chart_data['series_name']
        chart_pie_option['series'][0]['label']['normal']['formatter'] = chart_data['series_label_normal']
        chart_pie_option['series'][0]['data'] = chart_data['series_data']

        option = chart_pie_option
    else:
        chart_bar_option['title']['text'] = chart_data['title_text']
        chart_bar_option['legend']['data'] = chart_data['legend_data']
        chart_bar_option['xAxis'][0]['data'] = chart_data['xAxis_data']

        chart_bar_option['yAxis'][0]['name'] = chart_data['yAxis'][0]['name']
        chart_bar_option['yAxis'][0]['min'] = chart_data['yAxis'][0]['min']
        chart_bar_option['yAxis'][0]['max'] = chart_data['yAxis'][0]['max']
        chart_bar_option['yAxis'][0]['axisLabel']['formatter'] = chart_data['yAxis'][0]['axisLabel_formatter']

        chart_bar_option['yAxis'][1]['name'] = chart_data['yAxis'][1]['name']
        chart_bar_option['yAxis'][1]['min'] = chart_data['yAxis'][1]['min']
        chart_bar_option['yAxis'][1]['max'] = chart_data['yAxis'][1]['max']
        chart_bar_option['yAxis'][1]['axisLabel']['formatter'] = chart_data['yAxis'][1]['axisLabel_formatter']

        chart_bar_option['series'][0] = chart_data['series'][0]
        chart_bar_option['series'][1] = chart_data['series'][1]
        chart_bar_option['series'][2] = chart_data['series'][2]

        # print(chart_bar_option)
        option = chart_bar_option

    return option
