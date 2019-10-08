    var scale = 2;
    var app = new Vue({
        el: '#app',
        delimiters:['[[',']]'],
        data: {
            back_to_meeting: [
                { content: `2019年2月28日下午，赛迪顾问医药健康产业研究中心成功举办“洞见趋势，拓展合作”医药健康圆桌研讨会。本次研讨会汇聚政府、企业、投资机构等30余位业界专家，从各自的角度出发，围绕四个议题进行展开深入讨论。专家们认为，注重产业、政府和投资机构等平台的整合，坚持长期投资理念，才能更好的促进产业发展和集聚；增量能够带动所在地配套园区资源、提出新的方向和供给资源，将成为未来的营运模式；成果转化要贯通价值链和产业链，才能使资本回归技术本身；投资要立足于产业属性和定位，保持战略定力，不只追热点和单一的财务回报。`, toggle: false },
                { content: `研讨会上，赛迪顾问医药健康产业研究中心发布了赛迪医药健康产业大脑，并对产业大脑的功能和特色进行了介绍。生物医药产业大脑是医药健康产业研究中心的创新成果之一，主要为客户提供全视角的生物医药产业观察，涵盖区域分布、产业链、产业规模、产业招商、产业政策等内容，是可视化研究成果的呈现，为客户打造全流程的瓶颈剖析、对标借鉴、提质增效等服务。`, toggle: false },
            ],
            lineData: [
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', content: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
            ],
            note: { content: '注：2月11日国务院常务会议指出，加强癌症、罕见病等重大疾病防治，事关亿万群众福祉。一要加快完善癌症诊疗体系。二要加快境内外抗癌新药注册审批，满足患者急需。三要保障2000多万罕见病患者用药。', toggle: false },
            tableData: [
                { date: '2月11日', title: '《关于印发儿童社区获得性肺炎诊疗规范（2019年版）的通知》', institution: `国家卫生健康委办公厅    国家中医药局办公室`, value: 3, toggle: false },
                { date: '2月11日', title: '《关于印发儿童社区获得性肺炎诊疗规范（2019年版）的通知》', institution: `国家卫生健康委办公厅    国家中医药局办公室`, value: 3, toggle: false },
                { date: '2月11日', title: '《关于印发儿童社区获得性肺炎诊疗规范（2019年版）的通知》', institution: `国家卫生健康委办公厅    国家中医药局办公室`, value: 3, toggle: false },
                { date: '2月11日', title: '《关于印发儿童社区获得性肺炎诊疗规范（2019年版）的通知》', institution: `国家卫生健康委办公厅    国家中医药局办公室`, value: 3, toggle: false },
                { date: '2月11日', title: '《关于印发儿童社区获得性肺炎诊疗规范（2019年版）的通知》', institution: `国家卫生健康委办公厅    国家中医药局办公室`, value: 3, toggle: false },
                { date: '2月11日', title: '《关于印发儿童社区获得性肺炎诊疗规范（2019年版）的通知》', institution: `国家卫生健康委办公厅    国家中医药局办公室`, value: 3, toggle: false },],
            top_five_events: [
                { date: '02月22日', descripion: '央视曝光辅助用药滥用，21个辅助用药被点名。', toggle: false },
                { date: '02月22日', descripion: '首个国产生物类似药——利妥昔单抗注射液获批上市。', toggle: false },
                { date: '02月22日', descripion: '《粤港澳大湾区发展规划纲要》发布，生物技术成湾区四大新支柱产业之一。', toggle: false },
                { date: '02月22日', descripion: '国家卫健委办公厅发布通知，确定北京市、天津市等六省市作为“互联网+护理服务”试点省份。', toggle: false },
                { date: '02月22日', descripion: '国务院常务会议指出，要加快完善癌症诊疗体系，对首批21个罕见病药品和4个原料药实行税收优惠。', toggle: false },
            ],
            triple_text: { mainState: '全国生物制品累积销售额达85.84亿元（截至2月28日）', firstState: 'Merck Sharp & Dohme Corp.生物制品累计销售额遥遥领先', secondState: '人血白蛋白累计销售额排在生物制品榜单第一位', toggle: false },
            mainIntro: {
                toggle: false,
                mainTitle: "首个国产生物类似药上市", mainDetail: `    2月22日，国家药品监督管理局批准复星医药生物药平台复宏汉霖研制的利妥昔单抗注射液（汉利康）上市注册申请。该药是国内获批的首个国产生物类似药，主要用于非霍奇金淋巴瘤的治疗。利妥昔单抗是目前针对CD20 靶向的非霍奇金性淋巴瘤等最为有效的药物之一，与化药联用作为一线疗法，可显著提高病人生存率。
    汉利康上市意义重大，打破罗氏原研药在非霍奇金淋巴瘤领域的垄断，标志着国产企业在生物类似药上已具备较强的研发实力，对进口单抗产品的突破和挑战也意味着国产生物类似药大时代的开启。`
            },
            headDetail: {
                content: "02月22日首例国产生物类似药——利妥昔单抗注射液获批上市",
                toggle: false
            },
            data_set: [],
            chem: {},
            chin: {},
            biog: {},
            top10_comp: [],
            top10_prod: [],
            finance_data: []
        },
        methods: {
            changetable(i) {
                return this.tableData[i].toggle = !this.tableData[i].toggle
            },
            top_five_change(i) {
                return this.top_five_events[i].toggle = !this.top_five_events[i].toggle
            },
            pdfExport() {
                var dom = $("body #pdf")[0]
                var width = app.$refs[`pdf`].offsetWidth;
                var height = app.$refs[`pdf`].offsetHeight;
                var borders = findDashedBorders(app.$refs[`pdf`])
                const parentRect = app.$refs[`pdf`].getBoundingClientRect();
                var canvas = document.createElement("canvas");
                canvas.width = width * scale;
                canvas.height = height * scale;
                canvas.getContext("2d").scale(scale, scale);
                function domChoose(el) {
                    html2canvas(el, {
                        scale: scale,
                        allowTaint: false,
                        canvas: canvas,
                        useCORS: true,
                        logging: true
                    }).then(canvas => {
                        var context = canvas.getContext('2d');
                        context.mozImageSmoothingEnabled = false;
                        context.webkitImageSmoothingEnabled = false;
                        context.msImageSmoothingEnabled = false;
                        context.imageSmoothingEnabled = false;

                        drawDashedBorder(canvas, borders, parentRect)

                        var imgData = canvas.toDataURL('image/jpeg', 1.0);
                        var img = new Image();
                        img.src = imgData;

                        img.onload = function () {
                            img.style.width = canvas.width / scale + 'px';
                            img.style.height = canvas.height / scale + 'px';
                            img.style.transform = "scale(0.5)";
                            var pageHeight = 1069.5;
                            var leftHeight = height * 0.75;
                            var position = 0;
                            var imgWidth = width;
                            var imgHeight = height;
                            var doc = new jsPDF('p', 'pt', [imgWidth * 0.75, 1051.5]);
                            if (pageHeight >= leftHeight) {
                                doc.addImage(imgData, 'jpeg', 0, 0, imgWidth * 0.75, imgHeight * 0.75);
                            } else {
                                console.log("需要分页");
                                while (leftHeight > 0) {
                                    doc.addImage(imgData, 'JPEG', 0, position, imgWidth * 0.75, imgHeight * 0.75);
                                    leftHeight -= pageHeight;
                                    position -= 1069.5;
                                    if (leftHeight > 0) {
                                        doc.addPage();
                                    }
                                }
                            }
                            doc.save('test.pdf')
                        }
                    })
                }
                domChoose(dom)
            }
        },
        created() {

        }
    })
    findDashedBorders = (page) => {
        const tds = document.getElementsByClassName('temp-box')
        const dashedBorder = ["Top", "Right", "Bottom", "Left"];
        const borders = [];
        for (var i = 0; i < tds.length; i++) {
            const computedStyle = window.getComputedStyle(tds[i]);
            const borderStyle = computedStyle.borderStyle ? computedStyle.borderStyle.split(' ') : [];
            let dashedIndex = []
            borderStyle.forEach(item => {
                if (item = 'dashed') {
                    dashedIndex = [0, 1, 2, 3]
                }
            })
            if (dashedIndex.length) {
                const rect = tds[i].getBoundingClientRect();
                dashedIndex.map(index => {
                    const border = {
                        rect,
                        border: dashedBorder[index]
                    }
                    borders.push(border);
                    tds[i].style[`border${dashedBorder[index]}Color`] = 'transparent';
                });
            }
        };
        return borders;
    }

    drawDashedBorder = (canvas, borders, parentRect) => {
        var ctx = canvas.getContext("2d");
        ctx.setLineDash([20, 10]);
        ctx.strokeStyle = '#41719C';
        ctx.lineWidth = 4;
        ctx.globalAlpha = 1;

        borders.forEach(border => {
            var left = (border.rect.left + 0.5 - parentRect.left) * scale;
            var right = (border.rect.right - 0.5 - parentRect.left) * scale;
            var top = (border.rect.top + 0.5 - parentRect.top) * scale;
            var bottom = (border.rect.bottom - 0.5 - parentRect.top) * scale;
            switch (border.border) {
                case 'Top':
                    ctx.beginPath();
                    ctx.moveTo(left, top);
                    ctx.lineTo(right, top);
                    ctx.stroke();
                    break;
                case 'Right':
                    ctx.beginPath();
                    ctx.moveTo(right, top);
                    ctx.lineTo(right, bottom);
                    ctx.stroke();
                    break;
                case 'Bottom':
                    ctx.beginPath();
                    ctx.moveTo(left, bottom);
                    ctx.lineTo(right, bottom);
                    ctx.stroke();
                    break;
                case 'Left':
                    ctx.beginPath();
                    ctx.moveTo(left, top);
                    ctx.lineTo(left, bottom);
                    ctx.stroke();
                    break;
                default:
                    break;
            }
        })
    }