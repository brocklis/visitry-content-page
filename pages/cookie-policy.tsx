import Layout from "../components/layout"

const rawHTML = `
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:#7F7F7F;'>Last updated&nbsp;November 26, 2021</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>This Cookie Policy explains how&nbsp;ListerTech LLC&nbsp;(&quot;<strong>Company</strong>&quot;, &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, and &quot;<strong>our</strong>&quot;) uses cookies and similar technologies to recognize you when you visit our websites at&nbsp;</span><a href="http://www.visitry.com" target="_blank"><span style='font-size:15px;font-family:"Times New Roman",serif;color:blue;'>http://www.visitry.com</span></a><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>,&nbsp;(&quot;<strong>Websites</strong>&quot;). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>What are cookies?</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>Cookies set by the website owner (in this case,&nbsp;ListerTech LLC) are called &quot;first party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third party cookies&quot;. Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>Why do we use cookies?</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>We use first&nbsp;and third&nbsp;party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.&nbsp;Third parties serve cookies through our Websites for advertising, analytics and other purposes.&nbsp;This is described in more detail below.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>The specific types of first&nbsp;and third&nbsp;party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>How can I control cookies?</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser&apos;s help menu for more information.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit&nbsp;</span><a href="http://www.aboutads.info/choices/" target="_blank"><span style='font-size:15px;font-family:"Times New Roman",serif;color:blue;'>http://www.aboutads.info/choices/</span></a><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>&nbsp;or&nbsp;</span><a href="http://www.youronlinechoices.com" target="_blank"><span style='font-size:15px;font-family:"Times New Roman",serif;color:blue;'>http://www.youronlinechoices.com</span></a><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific&nbsp;cookies served may vary depending on the specific Online Properties you visit):</span><strong><u><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'><br>&nbsp;<br>&nbsp;</span></u></strong><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>Essential website cookies:</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__tlbcpv</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Used to record unique visitor views of the consent banner.</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.termly.io</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Termly&nbsp;</span><a href="https://termly.io/our-privacy-policy/" target="_blank"><span style='font-size:12px;font-family:"Arial",sans-serif;color:#1A98EB;'>View Service Privacy Policy</span></a><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>&nbsp;&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>1 year</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><u><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'><br>&nbsp;</span></u></strong><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>Performance and functionality cookies:</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>These cookies are used to enhance the performance and functionality of our Websites but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>XSRF-TOKEN</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>This cookie is written to help with site security in preventing Cross-Site Request Forgery attacks.</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.www.visitry.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Advertiser&apos;s website domain&nbsp;</span><a href="file:///C%3A/Users/brock/OneDrive/Desktop/None" target="_blank"><span style='font-size:12px;font-family:"Arial",sans-serif;color:#1A98EB;'>View Service Privacy Policy</span></a><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>&nbsp;&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>session</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>hs</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Security</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.www.browseroutofdatedes.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Wix.com&nbsp;</span><a href="https://support.wix.com/en/article/cookies-and-your-wix-site" target="_blank"><span style='font-size:12px;font-family:"Arial",sans-serif;color:#1A98EB;'>View Service Privacy Policy</span></a><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>&nbsp;&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>session</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>&nbsp;</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>TS#</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Increases website security. It is also a session cookie.</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.www.browseroutofdatedes.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Typescript&nbsp;</span><a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank"><span style='font-size:12px;font-family:"Arial",sans-serif;color:#1A98EB;'>View Service Privacy Policy</span></a><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>&nbsp;&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>server_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>session</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>TS#</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Increases website security. It is also a session cookie.</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>www.visitry.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Typescript&nbsp;</span><a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank"><span style='font-size:12px;font-family:"Arial",sans-serif;color:#1A98EB;'>View Service Privacy Policy</span></a><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>&nbsp;&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>session</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>&nbsp;</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>XSRF-TOKEN</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>This cookie is written to help with site security in preventing Cross-Site Request Forgery attacks.</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.www.browseroutofdatedes.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Advertiser&apos;s website domain&nbsp;</span><a href="file:///C%3A/Users/brock/OneDrive/Desktop/None" target="_blank"><span style='font-size:12px;font-family:"Arial",sans-serif;color:#1A98EB;'>View Service Privacy Policy</span></a><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>&nbsp;&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>session</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>TS#</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Increases website security. It is also a session cookie.</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.www.visitry.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Typescript&nbsp;</span><a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank"><span style='font-size:12px;font-family:"Arial",sans-serif;color:#1A98EB;'>View Service Privacy Policy</span></a><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>&nbsp;&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>server_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>session</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>&nbsp;</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>TS#</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Increases website security. It is also a session cookie.</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>www.browseroutofdatedes.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Typescript&nbsp;</span><a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank"><span style='font-size:12px;font-family:"Arial",sans-serif;color:#1A98EB;'>View Service Privacy Policy</span></a><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>&nbsp;&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>session</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><u><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'><br>&nbsp;</span></u></strong><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>Analytics and customization cookies:</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>bolt-performance</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>www.visitry.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________ &nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>pixel_tracker</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>session</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><u><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'><br>&nbsp;</span></u></strong><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>Advertising cookies:</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>svSession</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Identifies unique visitors and tracks a visitor&rsquo;s sessions on a site</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.www.browseroutofdatedes.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>Wix.com&nbsp;</span><a href="https://support.wix.com/en/article/cookies-and-your-wix-site" target="_blank"><span style='font-size:12px;font-family:"Arial",sans-serif;color:#1A98EB;'>View Service Privacy Policy</span></a><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>&nbsp;&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>1 year 11 months 29 days</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><u><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'><br>&nbsp;</span></u></strong><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>Unclassified cookies:</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>These are cookies that have not yet been categorized. We are in the process of classifying these cookies with the help of their providers.</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>_wixUIDX</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.www.browseroutofdatedes.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________ &nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td colspan="2" style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>2 months 29 days</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__cf_bm</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.fonts.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________ &nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>server_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>30 minutes</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>_wixRIDX</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.www.browseroutofdatedes.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________ &nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>less than 1 minute</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>_wixCIDX</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>.www.browseroutofdatedes.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________ &nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>2 months 29 days</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<table style="border: none;">
    <tbody>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Name:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>ssr-caching</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Purpose:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Provider:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>www.browseroutofdatedes.com</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Service:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>__________ &nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Country:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>United States</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Type:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>http_cookie</span></p>
            </td>
        </tr>
        <tr>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:right;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#19243C;'>Expires in:</span></p>
            </td>
            <td style="padding: 0.75pt;vertical-align: top;">
                <p style='margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:3.75pt;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Arial",sans-serif;color:#8B93A7;'>less than 1 minute</span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>What about other tracking technologies, like web beacons?</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>Cookies are not the only way&nbsp;to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear gifs&quot;). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites&nbsp;or opened an e-mail including them. This allows us, for example, to monitor&nbsp;the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>Do you use Flash cookies or Local Shared Objects?</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>Websites may also use so-called &quot;Flash Cookies&quot; (also known as Local Shared Objects or &quot;LSOs&quot;) to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the&nbsp;</span><a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html#_blank"><span style='font-size:15px;font-family:"Times New Roman",serif;color:blue;'>Website Storage Settings Panel</span></a><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>. You can also control Flash Cookies by going to the&nbsp;</span><a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html#_blank"><span style='font-size:15px;font-family:"Times New Roman",serif;color:blue;'>Global Storage Settings Panel</span></a><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>&nbsp;and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to &quot;information&quot; on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time).</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>Do you serve targeted advertising?</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other details that directly identify you unless you choose to provide these.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>How often will you update this Cookie Policy?</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>We may update&nbsp;this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>The date at the top of this Cookie Policy indicates when it was last updated.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:15px;font-family:"Times New Roman",serif;color:black;'>Where can I get further information?</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>If you have any questions about our use of cookies or other technologies, please email us at&nbsp;info@visitry.com&nbsp;or by post to:</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:18px;font-family:"Times New Roman",serif;color:black;'><br>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>ListerTech LLC</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>802 E Whiting St</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>Tampa,&nbsp;FL&nbsp;33602</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>United States</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>Phone:&nbsp;(+1)7273045707</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:15px;font-family:"Times New Roman",serif;color:#595959;'>Fax:&nbsp;(+1)8132003018</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
`
export default function PrivacyPolicy() {
    return (
        <Layout>
            <div className="gradient-bg py-20 pt-48">
                <h1 className="font-merri font-bold text-2xl lg:text-4xl max-w-7xl mx-auto text-white w-11/12">Cookie Policy</h1>
            </div>
            <div className="py-7 lg:py-20 max-w-7xl mx-auto w-11/12" dangerouslySetInnerHTML={{ __html: rawHTML }}>

            </div>
        </Layout>
    )
}
