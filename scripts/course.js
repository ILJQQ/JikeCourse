/**
 * Created by huyiqing on 2016/12/4.
 */
$(document).ready(function () {

    window.listed = false;

    goTop();

    $(window).on('scroll', function () {
        goTop();
    });
    function goTop() {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop >= 200) {
            $(".goTop").css({
                display: "block"
            });
            $(".goTop").show();
            $(".flex-win").css({
                height: "105px"
            });
        } else {
            $(".goTop").hide();
            $(".flex-win").css({
                height: "70px"
            });
        }
    }

    $(".goTop").on('click', function () {
        var speed = 400;//滑动的速度
        $('body,html').animate({scrollTop: 0}, speed);
        return false;
    });

    $(".mobile").on('mouseenter', function () {
        $(".fMobile").show();
        setBorderGray();
    });

    $(".fMobile").on('mouseenter', function () {
        $(".fMobile").show();
        setBorderGray();
        $(".mobile").addClass("floatLi");
    });

    $(".fMobile").on('mouseleave', function () {
        $(".fMobile").hide();
        setBorderGreen();
        $(".mobile").removeClass("floatLi");
    });

    $(".mobile").on('mouseleave', function () {
        $(".fMobile").hide();
        setBorderGreen();
    });

    $(".course-web").on('mouseenter', function () {
        $(".fWeb").show();
        setBorderGray();
    });

    $(".course-web").on('mouseleave', function () {
        $(".fWeb").hide();
        setBorderGreen();
    });

    $(".fWeb").on('mouseenter', function () {
        $(".fWeb").show();
        setBorderGray();
        $(".course-web").addClass("floatLi");
    });

    $(".fWeb").on('mouseleave', function () {
        $(".fWeb").hide();
        setBorderGreen();
        $(".course-web").removeClass("floatLi");
    });

    $(".course-dev").on('mouseenter', function () {
        $(".fDev").show();
        setBorderGray();
        setBarHight(680);
    });

    $(".course-dev").on('mouseleave', function () {
        $(".fDev").hide();
        setBorderGreen();
        setBarHight(405);
    });

    $(".fDev").on('mouseenter', function () {
        $(".fDev").show();
        setBorderGray();
        setBarHight(680);
        $(".course-dev").addClass("floatLi");
    });

    $(".fDev").on('mouseleave', function () {
        $(".fDev").hide();
        setBorderGreen();
        setBarHight(405);
        $(".course-dev").removeClass("floatLi");
    });

    $(".course-base").on('mouseenter', function () {
        $(".fBase").show();
        setBorderGray();
    });

    $(".course-base").on('mouseleave', function () {
        $(".fBase").hide();
        setBorderGreen();
    });

    $(".fBase").on('mouseenter', function () {
        $(".fBase").show();
        setBorderGray();
        $(".course-base").addClass("floatLi");
    });

    $(".fBase").on('mouseleave', function () {
        $(".fBase").hide();
        setBorderGreen();
        $(".course-base").removeClass("floatLi");
    });

    $(".course-cloudData").on('mouseenter', function () {
        $(".fCloudData").show();
        setBorderGray();
    });

    $(".course-cloudData").on('mouseleave', function () {
        $(".fCloudData").hide();
        setBorderGreen();
    });

    $(".fCloudData").on('mouseenter', function () {
        $(".fCloudData").show();
        setBorderGray();
        $(".course-cloudData").addClass("floatLi");
    });

    $(".fCloudData").on('mouseleave', function () {
        $(".fCloudData").hide();
        setBorderGreen();
        $(".course-cloudData").removeClass("floatLi");
    });

    $(".course-intellegence").on('mouseenter', function () {
        $(".fIntellegence").show();
        setBorderGray();
        setBarHight(455);
    });

    $(".course-intellegence").on('mouseleave', function () {
        $(".fIntellegence").hide();
        setBorderGreen();
        setBarHight(405);
    });

    $(".fIntellegence").on('mouseenter', function () {
        $(".fIntellegence").show();
        setBorderGray();
        setBarHight(455);
        $(".course-intellegence").addClass("floatLi");
    });

    $(".fIntellegence").on('mouseleave', function () {
        $(".fIntellegence").hide();
        setBorderGreen();
        setBarHight(405);
        $(".course-intellegence").removeClass("floatLi");
    });

    $(".course-db").on('mouseenter', function () {
        $(".fDb").show();
        setBorderGray();
    });

    $(".course-db").on('mouseleave', function () {
        $(".fDb").hide();
        setBorderGreen();
    });

    $(".fDb").on('mouseenter', function () {
        $(".fDb").show();
        setBorderGray();
        $(".course-Db").addClass("floatLi");
    });

    $(".fDb").on('mouseleave', function () {
        $(".fDb").hide();
        setBorderGreen();
        $(".course-Db").removeClass("floatLi");
    });

    $(".course-certificate").on('mouseenter', function () {
        $(".fCertificate").show();
        setBorderGray();
    });

    $(".course-certificate").on('mouseleave', function () {
        $(".fCertificate").hide();
        setBorderGreen();
    });

    $(".fCertificate").on('mouseenter', function () {
        $(".fCertificate").show();
        setBorderGray();
        $(".course-certificate").addClass("floatLi");
    });

    $(".fCertificate").on('mouseleave', function () {
        $(".fCertificate").hide();
        setBorderGreen();
        $(".course-certificate").removeClass("floatLi");
    });

    $(".course-it").on('mouseenter', function () {
        $(".fIT").show();
        setBorderGray();
    });

    $(".course-it").on('mouseleave', function () {
        $(".fIT").hide();
        setBorderGreen();
    });

    $(".fIT").on('mouseenter', function () {
        $(".fIT").show();
        setBorderGray();
        $(".course-it").addClass("floatLi");
    });

    $(".fIT").on('mouseleave', function () {
        $(".fIT").hide();
        setBorderGreen();
        $(".course-it").removeClass("floatLi");
    });

    $(".course-design").on('mouseenter', function () {
        $(".fDesign").show();
        setBorderGray();
    });

    $(".course-design").on('mouseleave', function () {
        $(".fDesign").hide();
        setBorderGreen();
    });

    $(".fDesign").on('mouseenter', function () {
        $(".fDesign").show();
        setBorderGray();
        $(".course-design").addClass("floatLi");
    });

    $(".fDesign").on('mouseleave', function () {
        $(".fDesign").hide();
        setBorderGreen();
        $(".course-design").removeClass("floatLi");
    });

    $(".search-icon").on('click', function () {
        var speed = 600;
        $(".floatSearch").show();
        $(".floatSearch").animate({width: 860}, speed);
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                if ($(".goSearch").val() != "") {
                    location.href = "http://search.jikexueyuan.com/course/?q=" + $(".goSearch").val();
                }
            }
        });

        $(".search-icon").on('click', function () {
            if ($(".goSearch").val() != "") {
                location.href = "http://search.jikexueyuan.com/course/?q=" + $(".goSearch").val();
            }
        });
    });

    $(".listStyle").on('click', function () {
        $(".course").addClass("listCourse");
        $(".courseList").hide();
        $(".courseListStyle").show();
        $(".courseDetail").css({
            position: "relative",
            display: "inline-block",
            width: "500px"
        });
        $(".notShow").css({
            display: "block",
            width: "500px"
        });
        $(".courseLevel").css({
            display: "inline-block"
        });
        $(".learnPeople").css({
            display: "inline-block"
        });
        $(".main").css({
            height: "3520px"
        });
        $(".courses").css({
            height: "3540px"
        });
        $(".pager").css({
            height: "3750px"
        });
    });

    $(".courseListStyle").find(".course").on('click',function () {
        location.href = $(this).find(".web-enviro").attr('href');
    });

    $(".picStyle").on('click', function () {
        $(".courseList").show();
        $(".courseListStyle").hide();
        $(".course").removeClass("listCourse");
        $(".courseDetail").css({
            position: "absolute",
            display: "block",
            width: "250px"
        });
        $(".notShow").css({
           width:"230px",
            display:"none"
        });
        $(".courseLevel").css({
            width:"230px",
            display:"none"
        });
        $(".learnPeople").css({
            display: "none"
        });
        $(".main").css({
            height: "1820px"
        });
        $(".courses").css({
            height: "1840px"
        });
        $(".pager").css({
            height: "2030px"
        });
    });

    $(".courseListStyle").children(this).on('mouseenter', function () {
        $(this).find(".opac").animate({opacity: 0.5}, 200);
    });

    $(".courseListStyle").children(this).on('mouseleave', function () {
        $(this).find(".opac").animate({opacity: 0}, 100);
    });

    $(".courseList").children(this).on('mouseenter', function () {
        $(this).find(".opac").animate({opacity: 0.5}, 200);
        $(this).find(".notShow").slideDown(300);
        $(this).find(".courseDetail").animate({height: 100}, 300);
        $(this).find(".courseLevel").slideDown(400);
        $(this).find(".learnPeople").slideDown(400);
    });

    $(".courseList").children(this).on('mouseleave', function () {
        $(this).find(".opac").animate({opacity: 0}, 300);
        $(this).find(".notShow").slideUp(100);
        $(this).find(".courseDetail").animate({height: 20}, 100);
        $(this).find(".courseLevel").slideUp(200);
        $(this).find(".learnPeople").slideUp(200);
    });


    $(".pages").on('click', function () {
        var pg = $(this).text();
        if (pg != 1) {
            location.href = "http://www.jikexueyuan.com/course/?pageNum=" + pg;
        }
    });

    $(".nextpg").on('click', function () {
        location.href = "http://www.jikexueyuan.com/course/?pageNum=" + 2;
    });

    $(".lastpg").on('click', function () {
        location.href = "http://www.jikexueyuan.com/course/?pageNum=" + 95;
    });

    $(".confirmBtn").on('click', function () {
        var page = $(".enterPage").val();
        if (isNaN(page)) {
            $(".negativeNum").slideDown(500);
            $(".negativeNum").delay(2000).slideUp(1000)
        } else if (page <= 0) {
            $(".negativeNum").slideDown(500);
            $(".negativeNum").delay(2000).slideUp(1000);
        } else if (page > 95) {
            $(".outOfBound").slideDown(500);
            $(".outOfBound").delay(2000).slideUp(1000)
        } else {
            location.href = "http://www.jikexueyuan.com/course/?pageNum=" + page;
        }
    });

    $(".closeImg").on('click', function () {
        var speed = 200;
        $(".floatSearch").animate({width: 0}, speed);
        $(".goSearch").val("");
    });

    function setBarHight(height) {
        $(".floatWin").css({
            height: height + "px"
        });
    }

    function setBorderGreen() {
        $(".detailBar").css({
            borderRight: "1px solid #35b558"
        });
    }

    function setBorderGray() {
        $(".detailBar").css({
            borderRight: "1px solid #e0e0e0"
        });
    }
});