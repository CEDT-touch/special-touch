from django.db import connection, transaction
import datetime


def report_remind():
    """
    新报告提醒功能
    :return:
    """
    nowDate = str(datetime.datetime.now().date())
    cursor = connection.cursor()
    # # 查询数据
    # 查询日期比当前日期小且未被查看的报告
    cursor.execute("SELECT * FROM report_report WHERE report_date <'{}' AND report_chack=FALSE".format(nowDate))
    remind = cursor.fetchall()
    if remind:
        dicRemind = {'report_id': remind[0][0], 'report_name': remind[0][1], 'report_date': remind[0][3]}
    else:
        dicRemind = {}
    return dicRemind