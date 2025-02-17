import { Page } from '@playwright/test';
import { BrowserContext } from '@playwright/test'
import { B2CAallfieldsPage } from './API_B2CAallfieldsPage';
import { B1NewParamsINTAllFieldsPage } from './API_B1NewParamsINTAllFieldsPage'
import { NewParamsUSAllFieldsPage } from './API_NewParamsUSAllFieldsPage'
import { NewparamsinurlUSnoAddress1Page } from './API_NewparamsinurlUSnoAddress1Page'
import { NewParaminURLUSNoCountryorderPage } from './API_NewParaminURLUSNoCountryorderPage'
import { NewparamsinurlUSnoEmailPage } from './API_NewparamsinurlUSnoEmailPage'
import { CourageUSRenewPrepopulatedAPIPage } from './API_CourageUSRenewPrepopulatedAPIPage'
import { NewParamsInUrlUSNoAddress2Page } from './API_NewParamsInUrlUSNoAddress2Page'
import { NewParamsInUrlUSNoStatePage } from './API_NewParamsInUrlUSNoStatePage'
import { NewParamsInUrlUSNoCityPage } from './API_NewParamsInUrlUSNoCityPage'
import { NewParamsInUrlUSNoFirstNamePage } from './API_NewParamsInUrlUSNoFirstNamePage'
import { NewParamsInUrlUSNoLastNamePage } from './API_NewParamsInUrlUSNoLastNamePage'
import { NewParamsInUrlUSNoZIPCodePage } from './API_NewParamsInUrlUSNoZIPCodePage'
import { CourageUSOrderPrepopulatedAPIPage } from './API_CourageUSOrderPrepopulatedAPIPage'
import { CourageINTOrderPrepopulatedAPIPage } from './API_CourageINTOrderPrepopulatedAPIPage'
import { CourageCAOrderPrepopulatedAPIPage } from './API_CourageCAOrderPrepopulatedAPIPage'
import { CourageINTRenewPrepopulatedAPIPage } from './API_CourageINTRenewPrepopulatedAPIPage'
import { CourageCARenewPrepopulatedAPIPage } from './API_CourageCARenewPrepopulatedAPIPage'
import { A2PopulatedOrderwithPaymentPage } from './CSC_A2PopulatedOrderwithPaymentPage'
import { CSC_CourageNoneSubDonorAnd4GiftsPage } from './CSC_CourageNoneSubDonorAnd4GiftsPage'
import { CSC_Courage02HCTYPCOrdersPage } from './CSC_Courage02HCTYPCOrdersPage'
import { CSC_Courage02HMTYPCOrdersPage } from './CSC_Courage02HMTYPCOrdersPage'
import { A4PopulatedGiftOrderwithPaymentPage } from './CSC_A4PopulatedGiftOrderwithPaymentPage'
import { B2NewparamsinurlCAallfieldsPage } from './CSC_B2NewparamsinurlCAallfieldsPage'
import { CSC_NewparamsinurlUSallfieldsPage } from './CSC_NewparamsinurlUSallfieldsPage'
import { CSC_CourageOrderSpecialCharsPage } from './CSC_CourageOrderSpecialCharsPage'
import { CSC_NewparamsinurlUSnoinfodisplayedPage } from './CSC_NewparamsinurlUSnoinfodisplayedPage'
import { CSC_NewparamsinurlUSnoFirstNamePage } from './CSC_NewparamsinurlUSnoFirstNamePage'
import { CSC_NewparamsinurlUSnoLastNamePage } from './CSC_NewparamsinurlUSnoLastNamePage'
import { CSC_NewparamsinurlUSnoAddress1Page } from './CSC_NewparamsinurlUSnoAddress1Page'
import { CSC_NewparamsinurlUSnoAddress2Page } from './CSC_NewparamsinurlUSnoAddress2Page'
import { CSC_NewparamsinurlUSnoCityPage } from './CSC_NewparamsinurlUSnoCityPage'
import { CSC_NewparamsinurlUSnoZipCodePage } from './CSC_NewparamsinurlUSnoZipCodePage'
import { CSC_NewparamsinurlUSnoStatePage } from './CSC_NewparamsinurlUSnoStatePage'
import { CSC_CourageUSRenewPrepopulatedAPIPage } from './CSC_CourageUSRenewPrepopulatedAPIPage'
import { CSC2_CourageUS2GiftsOrderNonSubDonorPage } from './CSC2_CourageUS2GiftsOrderNonSubDonorPage'
import { CSC2_CourageUS2GiftsOrderSubDonorPage } from './CSC2_CourageUS2GiftsOrderSubDonorPage'
import { CSC2_CourageCA1GiftForT1217Page } from './CSC2_CourageCA1GiftForT1217Page'
import { CSC2_CourageCA1Gift32charsforT1216Page } from './CSC2_CourageCA1Gift32charsforT1216Page'
import { CSC2_CourageCAMailAddDiffForT1217Page } from './CSC2_CourageCAMailAddDiffForT1217Page'
import { CSC2_CourageUSOrder32CharsForT1216Page } from './CSC2_CourageUSOrder32CharsForT1216Page'
import { CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage } from './CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage'
import { CSC2_CourageNOtoAutoRenewPage } from './CSC2_CourageNOtoAutoRenewPage'
import { CSC2_CourageYestoAutoRenewPage } from './CSC2_CourageYestoAutoRenewPage'
import { CCB_CourageCAOrderBillMePage } from './CCB_CourageCAOrderBillMePage'
import { CCB_CourageCCDeclinedPage } from './CCB_CourageCCDeclinedPage'
import { CCB_CourageCAOrderMasterCCPage } from './CCB_CourageCAOrderMasterCCPage'
import { CCB_CourageCAOrderVisaCCPage } from './CCB_CourageCAOrderVisaCCPage'
import { CSC2_ZoomerMagazineMYSignInPage } from './CSC2_ZoomerMagazineMYSignInPage'
import { Courage_CAMailAddDifPage } from './Courage_CAMailAddDifPage'
import { Courage_CAOrderBillMeLaterPage } from './Courage_CAOrderBillMeLaterPage'
import { Courage_CAOrderPage } from './Courage_CAOrderPage'
import { Courage_CA1GiftPage } from './Courage_CA1GiftPage'
import { Courage_CA3GiftPage } from './Courage_CA3GiftPage'
import { Courage_CAErrMsgPage } from './Courage_CAErrMsgPage'
import { CourageYestoAutoRenewPage } from './Courage_YestoAutoRenewPage'
import { Upsells_HiddenPage } from './Upsells_HiddenPage'
import { Courage_USOrderPage } from './Courage_USOrderPage'
import { Courage_USOrderBillMePage } from './Courage_USOrderBillMePage'
import { Courage_INTOrderINTBillMePage } from './Courage_INTOrderINTBillMePage'
import { Courage_INTOrderPrepopulatedAPIPage } from './Courage_INTOrderPrepopulatedAPIPage'
import { Courage_CAOrderPrepopulatedAPIPage } from './Courage_CAOrderPrepopulatedAPIPage'
import { Courage_USOrderPrepopulatedAPIPage } from './Courage_USOrderPrepopulatedAPIPage'
import { Upsells_ViewWithUpsellPage } from './Upsells_ViewWithUpsellPage'
import { Upsells_ViewNoUpsellPage } from './Upsells_ViewNoUpsellPage'
import { Upsells_PopupwithUpsellPage } from './Upsells_PopupwithUpsellPage'
import { Donation_ErrorMsgPage } from './Donation_ErrorMsgPage'
import { FSMSE_Courage02HCTYPCOrdersPage } from './FSMSE_Courage02HCTYPCOrdersPage'
import { FSMSE_Courage02HMTYPCOrdersPage } from './FSMSE_Courage02HMTYPCOrdersPage'
import { FSMSE_CourageCAOrderBillMePage } from './FSMSE_CourageCAOrderBillMePage'
import { FSMSE_CourageCAOrderMasterCCPage } from './FSMSE_CourageCAOrderMasterCCPage'
import { FSMSE_CourageCAOrderVisaCCPage } from './FSMSE_CourageCAOrderVisaCCPage'
import { FSMSE_IrelandCAOrderVisaCCPage } from './FSMSE_IrelandCAOrderVisaCCPage'
import { FSMSE_BooklistReaderI1519BulkOrderPage } from './FSMSE_BooklistReaderI1519BulkOrderPage'
import { FSMSE_CourageCCDeclinedPage } from './FSMSE_CourageCCDeclinedPage'
import { FSMSE_DonationOneTimePage } from './FSMSE_DonationOneTimePage'
import { FSMSE_DonationRecurringPage } from './FSMSE_DonationRecurringPage'
import { QABoxShopTEMPPage } from './QABoxShopTEMPPage'
import { FSMPE_RenewalAccountPage } from './FSMPE_RenewalAccountPage'
import { FSMPE_PayBill } from './FSMPE_PayBill'
import { FSMSE_HoffmanCANDigitalNoUpsellPage } from './FSMSE_HoffmanCANDigitalNoUpsellPage'
import { Hoffman_CANDigitalNoUpsellPage } from './Hoffman_CANDigitalNoUpsellPage'

import { FSMSE_HoffmanCANDigitalUpsellPage } from './FSMSE_HoffmanCANDigitalUpsellPage'
import { FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage } from './FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage'
import { FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage } from './FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage'
import { FSMSE_HoffmanCreditonCreditBillMeLaterPage } from './FSMSE_HoffmanCreditonCreditBillMeLaterPage'
import { FSMSE_ZoomerMagazineMYSignInPage } from './FSMSE_ZoomerMagazineMYSignInPage'
import { FSMSE_HoffmanCreditonBadCreditCardPage } from './FSMSE_HoffmanCreditonBadCreditCardPage'


import { MySite_BakeFromScratchPage } from './MySite_BakeFromScratchPage'
import { CouragePayBillOrdersPage } from './CouragePayBillOrdersPage'
import { MySite_MotortrendPage } from './MySite_MotortrendPage'

import { MySite_CottageLifePage } from './MySite_CottageLifePage'


import { FSMSE_NewparamsinurlUSallfieldsPage } from './FSMSE_ NewparamsinurlUSallfieldsPage'

import { Hoffman_CANDigitalWithUpsellPage } from './Hoffman_CANDigitalWithUpsellPage'
import { Hoffman_CANPrintNoUpsellPage } from './Hoffman_CANPrintNoUpsellPage'

import { Hoffman_CANPrintDigitalNoUpsellPage } from './Hoffman_CANPrintDigitalNoUpsellPage'
import { Hoffman_CANPrintDigitalWithUpsellPage } from './Hoffman_CANPrintDigitalWithUpsellPage'

import { Hoffman_CreditonBadCreditCardPage } from './Hoffman_CreditonBadCreditCardPage'
import { Hoffman_CreditonCreditBillMeLaterPage } from './Hoffman_CreditonCreditBillMeLaterPage'
import { Hoffman_INTDigitalWithNoUpsellPage } from './Hoffman_INTDigitalWithNoUpsellPage'
import { Hoffman_INTDigitalWithUpsellPage } from './Hoffman_INTDigitalWithUpsellPage'
import { Hoffman_INTPrintWithNoUpsellPage } from './Hoffman_INTPrintWithNoUpsellPage'
import { Hoffman_INTPrintDigitalWithNoUpsellPage } from './Hoffman_INTPrintDigitalWithNoUpsellPage'
import { Hoffman_INTPrintDigitalWithUpsellPage } from './Hoffman_INTPrintDigitalWithUpsellPage'
import { Hoffman_USDigitalWithNoUpsellPage } from './Hoffman_USDigitalWithNoUpsellPage'
import { Hoffman_USPrint_DigitalWithNoUpsellPage } from './Hoffman_USPrint_DigitalWithNoUpsellPage'
import { Hoffman_USPrintNegativeTestPage } from './Hoffman_USPrintNegativeTestPage'
import { CourageCAOrderWithDBTaxPage } from './CourageCAOrderWithDBTaxPage'

import { Hoffman_USDigitalWithUpsellPage } from './Hoffman_USDigitalWithUpsellPage'
import { Hoffman_USPrintWithNoUpsellPage } from './Hoffman_USPrintWithNoUpsellPage'

import { CouragePayBillPaymentsPage } from './CouragePayBillPaymentsPage'
import { DirectDebitPage } from './DirectDebitPage'
import { EB_GolfPage } from './EB_GolfPage'
import { CyberSourcePage } from './CyberSourcePage'
// import { Coupon_OrderPage } from './Coupon_OrderPage'








export class PomManager {
    page: Page;

    B2CAallfieldsPage: B2CAallfieldsPage;
    B1NewParamsINTAllFieldsPage: B1NewParamsINTAllFieldsPage;
    NewParamsUSAllFieldsPage: NewParamsUSAllFieldsPage;
    NewparamsinurlUSnoAddress1Page: NewparamsinurlUSnoAddress1Page;
    NewParaminURLUSNoCountryorderPage: NewParaminURLUSNoCountryorderPage;
    NewparamsinurlUSnoEmailPage: NewparamsinurlUSnoEmailPage;
    CourageUSRenewPrepopulatedAPIPage: CourageUSRenewPrepopulatedAPIPage;
    NewParamsInUrlUSNoAddress2Page: NewParamsInUrlUSNoAddress2Page;
    NewParamsInUrlUSNoStatePage: NewParamsInUrlUSNoStatePage;
    NewParamsInUrlUSNoCityPage: NewParamsInUrlUSNoCityPage;
    NewParamsInUrlUSNoFirstNamePage: NewParamsInUrlUSNoFirstNamePage;
    NewParamsInUrlUSNoLastNamePage: NewParamsInUrlUSNoLastNamePage;
    NewParamsInUrlUSNoZIPCodePage: NewParamsInUrlUSNoZIPCodePage;
    CourageUSOrderPrepopulatedAPIPage: CourageUSOrderPrepopulatedAPIPage;
    CourageINTOrderPrepopulatedAPIPage: CourageINTOrderPrepopulatedAPIPage;
    CourageCARenewPrepopulatedAPIPage: CourageCARenewPrepopulatedAPIPage;
    CourageCAOrderPrepopulatedAPIPage: CourageCAOrderPrepopulatedAPIPage;
    CourageINTRenewPrepopulatedAPIPage: CourageINTRenewPrepopulatedAPIPage;
    A2PopulatedOrderwithPaymentPage: A2PopulatedOrderwithPaymentPage;
    A4PopulatedGiftOrderwithPaymentPage: A4PopulatedGiftOrderwithPaymentPage;
    B2NewparamsinurlCAallfieldsPage: B2NewparamsinurlCAallfieldsPage;
    CSC_CourageNoneSubDonorAnd4GiftsPage: CSC_CourageNoneSubDonorAnd4GiftsPage;
    CSC_NewparamsinurlUSallfieldsPage: CSC_NewparamsinurlUSallfieldsPage;
    CSC_NewparamsinurlUSnoinfodisplayedPage: CSC_NewparamsinurlUSnoinfodisplayedPage;
    CSC_NewparamsinurlUSnoFirstNamePage: CSC_NewparamsinurlUSnoFirstNamePage;
    CSC_NewparamsinurlUSnoLastNamePage: CSC_NewparamsinurlUSnoLastNamePage;
    CSC_Courage02HCTYPCOrdersPage: CSC_Courage02HCTYPCOrdersPage;
    CSC_Courage02HMTYPCOrdersPage: CSC_Courage02HMTYPCOrdersPage;
    CSC_NewparamsinurlUSnoAddress1Page: CSC_NewparamsinurlUSnoAddress1Page;
    CSC_CourageOrderSpecialCharsPage: CSC_CourageOrderSpecialCharsPage;
    CSC_NewparamsinurlUSnoAddress2Page: CSC_NewparamsinurlUSnoAddress2Page;
    CSC_NewparamsinurlUSnoCityPage: CSC_NewparamsinurlUSnoCityPage;
    CSC_NewparamsinurlUSnoZipCodePage: CSC_NewparamsinurlUSnoZipCodePage;
    CSC_NewparamsinurlUSnoStatePage: CSC_NewparamsinurlUSnoStatePage;
    CSC_CourageUSRenewPrepopulatedAPIPage: CSC_CourageUSRenewPrepopulatedAPIPage;
    CSC2_CourageUS2GiftsOrderNonSubDonorPage: CSC2_CourageUS2GiftsOrderNonSubDonorPage;
    CSC2_CourageCA1GiftForT1217Page: CSC2_CourageCA1GiftForT1217Page;
    CSC2_CourageCA1Gift32charsforT1216Page: CSC2_CourageCA1Gift32charsforT1216Page;
    CSC2_CourageCAMailAddDiffForT1217Page: CSC2_CourageCAMailAddDiffForT1217Page;
    CSC2_CourageUSOrder32CharsForT1216Page: CSC2_CourageUSOrder32CharsForT1216Page;
    CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage: CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage;
    CSC2_CourageUS2GiftsOrderSubDonorPage: CSC2_CourageUS2GiftsOrderSubDonorPage;
    CSC2_CourageNOtoAutoRenewPage: CSC2_CourageNOtoAutoRenewPage;
    CSC2_CourageYestoAutoRenewPage: CSC2_CourageYestoAutoRenewPage;
    CCB_CourageCAOrderBillMePage: CCB_CourageCAOrderBillMePage;
    CCB_CourageCCDeclinedPage: CCB_CourageCCDeclinedPage;
    CCB_CourageCAOrderMasterCCPage: CCB_CourageCAOrderMasterCCPage;
    CCB_CourageCAOrderVisaCCPage: CCB_CourageCAOrderVisaCCPage;
    CSC2_ZoomerMagazineMYSignInPage: CSC2_ZoomerMagazineMYSignInPage;
    Courage_CAMailAddDifPage: Courage_CAMailAddDifPage;
    Courage_CAOrderBillMeLaterPage: Courage_CAOrderBillMeLaterPage;
    Courage_CAOrderPage: Courage_CAOrderPage;
    Courage_CA1GiftPage: Courage_CA1GiftPage;
    Courage_CA3GiftPage: Courage_CA3GiftPage;
    Courage_CAErrMsgPage: Courage_CAErrMsgPage;
    CourageYestoAutoRenewPage: CourageYestoAutoRenewPage;
    Courage_USOrderPage: Courage_USOrderPage;
    Courage_USOrderBillMePage: Courage_USOrderBillMePage;
    Courage_INTOrderINTBillMePage: Courage_INTOrderINTBillMePage;
    Courage_INTOrderPrepopulatedAPIPage: Courage_INTOrderPrepopulatedAPIPage;
    Courage_CAOrderPrepopulatedAPIPage: Courage_CAOrderPrepopulatedAPIPage;
    Courage_USOrderPrepopulatedAPIPage: Courage_USOrderPrepopulatedAPIPage;
    Donation_ErrorMsgPage: Donation_ErrorMsgPage;
    Upsells_HiddenPage: Upsells_HiddenPage;
    Upsells_ViewWithUpsellPage: Upsells_ViewWithUpsellPage;
    Upsells_ViewNoUpsellPage: Upsells_ViewNoUpsellPage;
    Upsells_PopupwithUpsellPage: Upsells_PopupwithUpsellPage;
    FSMSE_Courage02HCTYPCOrdersPage: FSMSE_Courage02HCTYPCOrdersPage;
    FSMSE_Courage02HMTYPCOrdersPage: FSMSE_Courage02HMTYPCOrdersPage;
    FSMSE_CourageCAOrderBillMePage: FSMSE_CourageCAOrderBillMePage;
    FSMSE_IrelandCAOrderVisaCCPage: FSMSE_IrelandCAOrderVisaCCPage;
    FSMSE_BooklistReaderI1519BulkOrderPage: FSMSE_BooklistReaderI1519BulkOrderPage;
    QABoxShopTEMPPage: QABoxShopTEMPPage;
    FSMSE_ZoomerMagazineMYSignInPage: FSMSE_ZoomerMagazineMYSignInPage;
    FSMSE_CourageCAOrderMasterCCPage: FSMSE_CourageCAOrderMasterCCPage;
    FSMSE_CourageCAOrderVisaCCPage: FSMSE_CourageCAOrderVisaCCPage;
    FSMSE_CourageCCDeclinedPage: FSMSE_CourageCCDeclinedPage;
    FSMSE_DonationOneTimePage: FSMSE_DonationOneTimePage;
    FSMSE_DonationRecurringPage: FSMSE_DonationRecurringPage;
    FSMSE_HoffmanCANDigitalNoUpsellPage: FSMSE_HoffmanCANDigitalNoUpsellPage;
    FSMSE_HoffmanCANDigitalUpsellPage: FSMSE_HoffmanCANDigitalUpsellPage;
    FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage: FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage;
    FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage: FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage;
    FSMSE_HoffmanCreditonCreditBillMeLaterPage: FSMSE_HoffmanCreditonCreditBillMeLaterPage;
    FSMSE_HoffmanCreditonBadCreditCardPage: FSMSE_HoffmanCreditonBadCreditCardPage;
    FSMSE_NewparamsinurlUSallfieldsPage: FSMSE_NewparamsinurlUSallfieldsPage;
    Hoffman_CANDigitalNoUpsellPage: Hoffman_CANDigitalNoUpsellPage;
    Hoffman_CANDigitalWithUpsellPage: Hoffman_CANDigitalWithUpsellPage;
    Hoffman_CANPrintNoUpsellPage: Hoffman_CANPrintNoUpsellPage;
    Hoffman_CANPrintDigitalNoUpsellPage: Hoffman_CANPrintDigitalNoUpsellPage;
    Hoffman_CANPrintDigitalWithUpsellPage: Hoffman_CANPrintDigitalWithUpsellPage;
    Hoffman_CreditonCreditBillMeLaterPage: Hoffman_CreditonCreditBillMeLaterPage;
    Hoffman_INTDigitalWithNoUpsellPage: Hoffman_INTDigitalWithNoUpsellPage;
    Hoffman_INTDigitalWithUpsellPage: Hoffman_INTDigitalWithUpsellPage;
    FSMPE_RenewalAccountPage: FSMPE_RenewalAccountPage;
    Hoffman_CreditonBadCreditCardPage: Hoffman_CreditonBadCreditCardPage;
    FSMPE_PayBill: FSMPE_PayBill
    Hoffman_INTPrintWithNoUpsellPage: Hoffman_INTPrintWithNoUpsellPage;
    Hoffman_INTPrintDigitalWithNoUpsellPage: Hoffman_INTPrintDigitalWithNoUpsellPage;
    Hoffman_INTPrintDigitalWithUpsellPage: Hoffman_INTPrintDigitalWithUpsellPage;
    MySite_BakeFromScratchPage: MySite_BakeFromScratchPage;
    CouragePayBillOrdersPage: CouragePayBillOrdersPage;
    MySite_MotortrendPage: MySite_MotortrendPage;
    MySite_CottageLifePage: MySite_CottageLifePage;
    Hoffman_USPrint_DigitalWithNoUpsellPage: Hoffman_USPrint_DigitalWithNoUpsellPage;
    Hoffman_USPrintNegativeTestPage: Hoffman_USPrintNegativeTestPage;
    Hoffman_USDigitalWithNoUpsellPage: Hoffman_USDigitalWithNoUpsellPage;
    CourageCAOrderWithDBTaxPage: CourageCAOrderWithDBTaxPage;

    Hoffman_USDigitalWithUpsellPage: Hoffman_USDigitalWithUpsellPage;
    Hoffman_USPrintWithNoUpsellPage: Hoffman_USPrintWithNoUpsellPage;

    CouragePayBillPaymentsPage: CouragePayBillPaymentsPage;
    DirectDebitPage: DirectDebitPage;
    EB_GolfPage: EB_GolfPage;
    CyberSourcePage: CyberSourcePage;



    constructor(page: Page) {
        this.page = page;
        this.B2CAallfieldsPage = new B2CAallfieldsPage(page);
        this.B1NewParamsINTAllFieldsPage = new B1NewParamsINTAllFieldsPage(page);
        this.NewParamsUSAllFieldsPage = new NewParamsUSAllFieldsPage(page);
        this.NewparamsinurlUSnoAddress1Page = new NewparamsinurlUSnoAddress1Page(page);
        this.NewParaminURLUSNoCountryorderPage = new NewParaminURLUSNoCountryorderPage(page);
        this.NewparamsinurlUSnoEmailPage = new NewparamsinurlUSnoEmailPage(page);
        this.CourageUSRenewPrepopulatedAPIPage = new CourageUSRenewPrepopulatedAPIPage(page);
        this.NewParamsInUrlUSNoAddress2Page = new NewParamsInUrlUSNoAddress2Page(page);
        this.NewParamsInUrlUSNoStatePage = new NewParamsInUrlUSNoStatePage(page);
        this.NewParamsInUrlUSNoCityPage = new NewParamsInUrlUSNoCityPage(page);
        this.NewParamsInUrlUSNoFirstNamePage = new NewParamsInUrlUSNoFirstNamePage(page);
        this.NewParamsInUrlUSNoLastNamePage = new NewParamsInUrlUSNoLastNamePage(page);
        this.NewParamsInUrlUSNoZIPCodePage = new NewParamsInUrlUSNoZIPCodePage(page);
        this.CourageUSOrderPrepopulatedAPIPage = new CourageUSOrderPrepopulatedAPIPage(page);
        this.CourageINTOrderPrepopulatedAPIPage = new CourageINTOrderPrepopulatedAPIPage(page);
        this.CourageCARenewPrepopulatedAPIPage = new CourageCARenewPrepopulatedAPIPage(page)
        this.CourageCAOrderPrepopulatedAPIPage = new CourageCAOrderPrepopulatedAPIPage(page);
        this.CourageINTRenewPrepopulatedAPIPage = new CourageINTRenewPrepopulatedAPIPage(page);
        this.A2PopulatedOrderwithPaymentPage = new A2PopulatedOrderwithPaymentPage(page);
        this.CSC_CourageNoneSubDonorAnd4GiftsPage = new CSC_CourageNoneSubDonorAnd4GiftsPage(page);
        this.CSC_Courage02HCTYPCOrdersPage = new CSC_Courage02HCTYPCOrdersPage(page);
        this.CSC_Courage02HMTYPCOrdersPage = new CSC_Courage02HMTYPCOrdersPage(page);
        this.A4PopulatedGiftOrderwithPaymentPage = new A4PopulatedGiftOrderwithPaymentPage(page);
        this.CSC_CourageNoneSubDonorAnd4GiftsPage = new CSC_CourageNoneSubDonorAnd4GiftsPage(page);
        this.CSC_Courage02HCTYPCOrdersPage = new CSC_Courage02HCTYPCOrdersPage(page);
        this.CSC_Courage02HMTYPCOrdersPage = new CSC_Courage02HMTYPCOrdersPage(page);
        this.B2NewparamsinurlCAallfieldsPage = new B2NewparamsinurlCAallfieldsPage(page);
        this.CSC_NewparamsinurlUSallfieldsPage = new CSC_NewparamsinurlUSallfieldsPage(page);
        this.CSC_NewparamsinurlUSnoinfodisplayedPage = new CSC_NewparamsinurlUSnoinfodisplayedPage(page);
        this.CSC_NewparamsinurlUSnoFirstNamePage = new CSC_NewparamsinurlUSnoFirstNamePage(page);
        this.CSC_NewparamsinurlUSnoLastNamePage = new CSC_NewparamsinurlUSnoLastNamePage(page);
        this.CSC_Courage02HCTYPCOrdersPage = new CSC_Courage02HCTYPCOrdersPage(page);
        this.CSC_Courage02HMTYPCOrdersPage = new CSC_Courage02HMTYPCOrdersPage(page);
        this.B2NewparamsinurlCAallfieldsPage = new B2NewparamsinurlCAallfieldsPage(page);
        this.CSC_NewparamsinurlUSnoAddress1Page = new CSC_NewparamsinurlUSnoAddress1Page(page);
        this.CSC_CourageOrderSpecialCharsPage = new CSC_CourageOrderSpecialCharsPage(page);
        this.CSC_NewparamsinurlUSnoAddress2Page = new CSC_NewparamsinurlUSnoAddress2Page(page);
        this.CSC_NewparamsinurlUSnoCityPage = new CSC_NewparamsinurlUSnoCityPage(page);
        this.CSC_NewparamsinurlUSnoZipCodePage = new CSC_NewparamsinurlUSnoZipCodePage(page);
        this.CSC_NewparamsinurlUSnoStatePage = new CSC_NewparamsinurlUSnoStatePage(page);
        this.CSC2_CourageCA1Gift32charsforT1216Page = new CSC2_CourageCA1Gift32charsforT1216Page(page);
        this.CSC_CourageUSRenewPrepopulatedAPIPage = new CSC_CourageUSRenewPrepopulatedAPIPage(page);
        this.CSC2_CourageUS2GiftsOrderNonSubDonorPage = new CSC2_CourageUS2GiftsOrderNonSubDonorPage(page);
        this.CSC_NewparamsinurlUSnoZipCodePage = new CSC_NewparamsinurlUSnoZipCodePage(page);
        this.CSC_NewparamsinurlUSnoStatePage = new CSC_NewparamsinurlUSnoStatePage(page);
        this.CSC_CourageUSRenewPrepopulatedAPIPage = new CSC_CourageUSRenewPrepopulatedAPIPage(page);
        this.CSC2_CourageCA1Gift32charsforT1216Page = new CSC2_CourageCA1Gift32charsforT1216Page(page);
        this.CSC2_CourageCA1GiftForT1217Page = new CSC2_CourageCA1GiftForT1217Page(page);
        this.CSC2_CourageCAMailAddDiffForT1217Page = new CSC2_CourageCAMailAddDiffForT1217Page(page);
        this.CSC2_CourageUSOrder32CharsForT1216Page = new CSC2_CourageUSOrder32CharsForT1216Page(page);
        this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = new CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage(page);
        this.CSC2_CourageUS2GiftsOrderSubDonorPage = new CSC2_CourageUS2GiftsOrderSubDonorPage(page);
        this.CSC2_CourageNOtoAutoRenewPage = new CSC2_CourageNOtoAutoRenewPage(page);
        this.CSC2_CourageYestoAutoRenewPage = new CSC2_CourageYestoAutoRenewPage(page);
        this.CCB_CourageCAOrderBillMePage = new CCB_CourageCAOrderBillMePage(page);
        this.CCB_CourageCCDeclinedPage = new CCB_CourageCCDeclinedPage(page);
        this.CCB_CourageCAOrderMasterCCPage = new CCB_CourageCAOrderMasterCCPage(page)
        this.CCB_CourageCAOrderVisaCCPage = new CCB_CourageCAOrderVisaCCPage(page);
        this.CSC2_ZoomerMagazineMYSignInPage = new CSC2_ZoomerMagazineMYSignInPage(page);
        this.Courage_CAMailAddDifPage = new Courage_CAMailAddDifPage(page);
        this.Courage_CAOrderBillMeLaterPage = new Courage_CAOrderBillMeLaterPage(page);
        this.Courage_CAOrderPage = new Courage_CAOrderPage(page);
        this.Courage_CA1GiftPage = new Courage_CA1GiftPage(page)
        this.Courage_CA3GiftPage = new Courage_CA3GiftPage(page)
        this.Courage_CAErrMsgPage = new Courage_CAErrMsgPage(page)
        this.CourageYestoAutoRenewPage = new CourageYestoAutoRenewPage(page)
        this.Courage_USOrderPage = new Courage_USOrderPage(page);
        this.Courage_USOrderBillMePage = new Courage_USOrderBillMePage(page);
        this.Courage_INTOrderINTBillMePage = new Courage_INTOrderINTBillMePage(page);
        this.Courage_INTOrderPrepopulatedAPIPage = new Courage_INTOrderPrepopulatedAPIPage(page);
        this.Courage_CAOrderPrepopulatedAPIPage = new Courage_CAOrderPrepopulatedAPIPage(page);
        this.Courage_USOrderPrepopulatedAPIPage = new Courage_USOrderPrepopulatedAPIPage(page);
        this.Donation_ErrorMsgPage = new Donation_ErrorMsgPage(page);
        this.Upsells_HiddenPage = new Upsells_HiddenPage(page);
        this.Upsells_ViewWithUpsellPage = new Upsells_ViewWithUpsellPage(page);
        this.Upsells_ViewNoUpsellPage = new Upsells_ViewNoUpsellPage(page);
        this.Upsells_PopupwithUpsellPage = new Upsells_PopupwithUpsellPage(page);
        this.FSMSE_Courage02HCTYPCOrdersPage = new FSMSE_Courage02HCTYPCOrdersPage(page);
        this.FSMSE_Courage02HMTYPCOrdersPage = new FSMSE_Courage02HMTYPCOrdersPage(page);
        this.FSMSE_CourageCAOrderBillMePage = new FSMSE_CourageCAOrderBillMePage(page);
        this.FSMSE_CourageCAOrderMasterCCPage = new FSMSE_CourageCAOrderMasterCCPage(page);
        this.FSMSE_CourageCAOrderVisaCCPage = new FSMSE_CourageCAOrderVisaCCPage(page);
        this.FSMSE_IrelandCAOrderVisaCCPage = new FSMSE_IrelandCAOrderVisaCCPage(page);
        this.FSMSE_BooklistReaderI1519BulkOrderPage = new FSMSE_BooklistReaderI1519BulkOrderPage(page);
        this.FSMSE_CourageCCDeclinedPage = new FSMSE_CourageCCDeclinedPage(page);
        this.QABoxShopTEMPPage = new QABoxShopTEMPPage(page);

        this.FSMSE_DonationOneTimePage = new FSMSE_DonationOneTimePage(page)
        this.FSMSE_DonationRecurringPage = new FSMSE_DonationRecurringPage(page)
        this.FSMSE_HoffmanCANDigitalNoUpsellPage = new FSMSE_HoffmanCANDigitalNoUpsellPage(page)

        this.FSMSE_HoffmanCANDigitalUpsellPage = new FSMSE_HoffmanCANDigitalUpsellPage(page)
        this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = new FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage(page)

        this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = new FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage(page)
        this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = new FSMSE_HoffmanCreditonCreditBillMeLaterPage(page)
        this.FSMSE_HoffmanCreditonBadCreditCardPage = new FSMSE_HoffmanCreditonBadCreditCardPage(page)
        this.FSMSE_ZoomerMagazineMYSignInPage = new FSMSE_ZoomerMagazineMYSignInPage(page)
        this.FSMPE_RenewalAccountPage = new FSMPE_RenewalAccountPage(page);
        this.FSMPE_PayBill = new FSMPE_PayBill(page);
        this.MySite_BakeFromScratchPage = new MySite_BakeFromScratchPage(page);
        this.CouragePayBillOrdersPage = new CouragePayBillOrdersPage(page);
        this.MySite_MotortrendPage = new MySite_MotortrendPage(page);

        this.FSMSE_NewparamsinurlUSallfieldsPage = new FSMSE_NewparamsinurlUSallfieldsPage(page);
        this.Hoffman_CANDigitalNoUpsellPage = new Hoffman_CANDigitalNoUpsellPage(page);
        this.Hoffman_CANDigitalWithUpsellPage = new Hoffman_CANDigitalWithUpsellPage(page);
        this.Hoffman_CANPrintNoUpsellPage = new Hoffman_CANPrintNoUpsellPage(page);
        this.Hoffman_CANPrintDigitalNoUpsellPage = new Hoffman_CANPrintDigitalNoUpsellPage(page);
        this.Hoffman_CANPrintDigitalWithUpsellPage = new Hoffman_CANPrintDigitalWithUpsellPage(page);
        this.MySite_CottageLifePage = new MySite_CottageLifePage(page);

        this.Hoffman_CreditonBadCreditCardPage = new Hoffman_CreditonBadCreditCardPage(page)
        this.Hoffman_CreditonCreditBillMeLaterPage = new Hoffman_CreditonCreditBillMeLaterPage(page)

        this.Hoffman_INTDigitalWithNoUpsellPage = new Hoffman_INTDigitalWithNoUpsellPage(page)
        this.Hoffman_INTDigitalWithUpsellPage = new Hoffman_INTDigitalWithUpsellPage(page)

        this.Hoffman_INTPrintWithNoUpsellPage = new Hoffman_INTPrintWithNoUpsellPage(page)
        this.Hoffman_INTPrintDigitalWithNoUpsellPage = new Hoffman_INTPrintDigitalWithNoUpsellPage(page)
        this.Hoffman_USDigitalWithNoUpsellPage = new Hoffman_USDigitalWithNoUpsellPage(page)



        this.Hoffman_USPrint_DigitalWithNoUpsellPage = new Hoffman_USPrint_DigitalWithNoUpsellPage(page);
        this.Hoffman_INTPrintDigitalWithUpsellPage = new Hoffman_INTPrintDigitalWithUpsellPage(page);
        this.Hoffman_USPrintNegativeTestPage = new Hoffman_USPrintNegativeTestPage(page);
        this.Hoffman_USDigitalWithUpsellPage = new Hoffman_USDigitalWithUpsellPage(page);
        this.CourageCAOrderWithDBTaxPage = new CourageCAOrderWithDBTaxPage(page);

        this.Hoffman_USPrintWithNoUpsellPage = new Hoffman_USPrintWithNoUpsellPage(page);

        this.CouragePayBillPaymentsPage = new CouragePayBillPaymentsPage(page);
        this.DirectDebitPage = new DirectDebitPage(page)
        this.EB_GolfPage = new EB_GolfPage(page)
        this.CyberSourcePage = new CyberSourcePage(page)
        // this.Coupon_OrderPage = new Coupon_OrderPage(page);

      


    }



    getB2CAallfieldsPage() {

        return this.B2CAallfieldsPage;
    }

    getB1NewParamsINTAllFieldsPage() {
        return this.B1NewParamsINTAllFieldsPage;
    }
    getNewParamsUSAllFieldsPage() {
        return this.NewParamsUSAllFieldsPage;
    }

    getNewparamsinurlUSnoAddress1Page() {
        return this.NewparamsinurlUSnoAddress1Page;
    }

    getNewParamsInUrlUSNoAddress2Page() {
        return this.NewParamsInUrlUSNoAddress2Page;
    }

    getNewParamsInUrlUSNoStatePage() {
        return this.NewParamsInUrlUSNoStatePage;
    }

    getNewParamsInUrlUSNoCityPage() {
        return this.NewParamsInUrlUSNoCityPage;
    }

    getNewParamsInUrlUSNoFirstNamePage() {
        return this.NewParamsInUrlUSNoFirstNamePage;
    }

    getNewParamsInUrlUSNoLastNamePage() {
        return this.NewParamsInUrlUSNoLastNamePage;
    }

    getNewParamsInUrlUSNoZIPCodePage() {
        return this.NewParamsInUrlUSNoZIPCodePage;
    }

    getCourageUSOrderPrepopulatedAPIPage() {
        return this.CourageUSOrderPrepopulatedAPIPage;
    }

    getCourageINTOrderPrepopulatedAPIPage() {
        return this.CourageINTOrderPrepopulatedAPIPage;
    }


    getNewParaminURLUSNoCountryorderPage() {
        return this.NewParaminURLUSNoCountryorderPage;
    }

    getNewparamsinurlUSnoEmailPage() {
        return this.NewparamsinurlUSnoEmailPage;
    }


    getCourageUSRenewPrepopulatedAPIPage() {
        return this.CourageUSRenewPrepopulatedAPIPage;
    }

    getCourageCAOrderPrepopulatedAPIPage() {
        return this.CourageCAOrderPrepopulatedAPIPage;
    }

    getCourageINTRenewPrepopulatedAPIPage() {
        return this.CourageINTRenewPrepopulatedAPIPage;
    }

    getCourageCARenewPrepopulatedAPIPage() {
        return this.CourageCARenewPrepopulatedAPIPage;

    }

    getA2PopulatedOrderwithPaymentPage() {
        return this.A2PopulatedOrderwithPaymentPage;

    }

    getCSC_CourageNoneSubDonorAnd4GiftsPage() {
        return this.CSC_CourageNoneSubDonorAnd4GiftsPage;
    }

    getCSC_Courage02HCTYPCOrdersPage() {
        return this.CSC_Courage02HCTYPCOrdersPage;
    }

    getCSC_Courage02HMTYPCOrdersPage() {
        return this.CSC_Courage02HMTYPCOrdersPage;
    }


    getA4PopulatedGiftOrderwithPaymentPage() {
        return this.A4PopulatedGiftOrderwithPaymentPage;

    }

    getB2NewparamsinurlCAallfieldsPage() {
        return this.B2NewparamsinurlCAallfieldsPage;

    }

    getCSC_NewparamsinurlUSallfieldsPage() {
        return this.CSC_NewparamsinurlUSallfieldsPage;

    }

    getCSC_CourageOrderSpecialCharsPage() {
        return this.CSC_CourageOrderSpecialCharsPage;
    }

    getCSC_NewparamsinurlUSnoinfodisplayedPage() {
        return this.CSC_NewparamsinurlUSnoinfodisplayedPage;

    }

    getCSC_NewparamsinurlUSnoFirstNamePage() {
        return this.CSC_NewparamsinurlUSnoFirstNamePage;

    }

    getCSC_NewparamsinurlUSnoLastNamePage() {
        return this.CSC_NewparamsinurlUSnoLastNamePage;

    }

    getCSC_NewparamsinurlUSnoAddress1Page() {
        return this.CSC_NewparamsinurlUSnoAddress1Page;

    }
    getCSC_NewparamsinurlUSnoAddress2Page() {
        return this.CSC_NewparamsinurlUSnoAddress2Page;

    }

    getCSC_NewparamsinurlUSnoCityPage() {
        return this.CSC_NewparamsinurlUSnoCityPage;

    }

    getCSC_NewparamsinurlUSnoZipCodePage() {
        return this.CSC_NewparamsinurlUSnoZipCodePage;

    }

    getCSC_NewparamsinurlUSnoStatePage() {
        return this.CSC_NewparamsinurlUSnoStatePage;

    }
    getCSC2_CourageCA1Gift32charsforT1216Page() {
        return this.CSC2_CourageCA1Gift32charsforT1216Page;

    }

    getCSC_CourageUSRenewPrepopulatedAPIPage() {
        return this.CSC_CourageUSRenewPrepopulatedAPIPage;
    }

    getCSC2_CourageUS2GiftsOrderNonSubDonorPage() {
        return this.CSC2_CourageUS2GiftsOrderNonSubDonorPage;
    }


    getCSC2_CourageUS2GiftsOrderSubDonorPage() {
        return this.CSC2_CourageUS2GiftsOrderSubDonorPage;
    }



    getCSC2_CourageCA1GiftForT1217Page() {
        return this.CSC2_CourageCA1GiftForT1217Page;
    }


    getCSC2_CourageCAMailAddDiffForT1217Page() {
        return this.CSC2_CourageCAMailAddDiffForT1217Page;
    }

    getCSC2_CourageNOtoAutoRenewPage() {
        return this.CSC2_CourageNOtoAutoRenewPage;
    }
    getCSC2_CourageYestoAutoRenewPage() {
        return this.CSC2_CourageYestoAutoRenewPage;
    }



    getCSC2_CourageUSOrder32CharsForT1216Page() {
        return this.CSC2_CourageUSOrder32CharsForT1216Page;
    }


    getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage() {
        return this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage;
    }



    getCCB_CourageCCDeclinedPage() {

        return this.CCB_CourageCCDeclinedPage;
    }



    getCCB_CourageCAOrderBillMePage() {
        return this.CCB_CourageCAOrderBillMePage;
    }

    getCSC2_ZoomerMagazineMYSignInPage() {
        return this.CSC2_ZoomerMagazineMYSignInPage;
    }


    getCCB_CourageCAOrderMasterCCPage() {
        return this.CCB_CourageCAOrderMasterCCPage;
    }
    getCCB_CourageCAOrderVisaCCPage() {
        return this.CCB_CourageCAOrderVisaCCPage;

    }

    getCourage_CAMailAddDifPage() {
        return this.Courage_CAMailAddDifPage;

    }

    getCourage_CAOrderBillMeLaterPage() {
        return this.Courage_CAOrderBillMeLaterPage;

    }
    getCourage_CAOrderPage() {
        return this.Courage_CAOrderPage;

    }
    getCourage_CA1GiftPage() {
        return this.Courage_CA1GiftPage;

    }


    getCourage_CA3GiftPage() {
        return this.Courage_CA3GiftPage;

    }

    getCourage_CAErrMsgPage() {
        return this.Courage_CAErrMsgPage;

    }

    getCourageYestoAutoRenewPage() {
        return this.CourageYestoAutoRenewPage;

    }





    getCourage_USOrderPage() {
        return this.Courage_USOrderPage;
    }

    getCourage_USOrderBillMePage() {
        return this.Courage_USOrderBillMePage;
    }

    getCourage_INTOrderINTBillMePage() {
        return this.Courage_INTOrderINTBillMePage;
    }

    getCourage_INTOrderPrepopulatedAPIPage() {
        return this.Courage_INTOrderPrepopulatedAPIPage;
    }

    getCourage_CAOrderPrepopulatedAPIPage() {
        return this.Courage_CAOrderPrepopulatedAPIPage;
    }


    getCourage_USOrderPrepopulatedAPIPage() {
        return this.Courage_USOrderPrepopulatedAPIPage;
    }


    getDonation_ErrorMsgPage() {
        return this.Donation_ErrorMsgPage;
    }



    getUpsells_HiddenPage() {
        return this.Upsells_HiddenPage;
    }
    getUpsells_ViewWithUpsellPage() {
        return this.Upsells_ViewWithUpsellPage;
    }


    getUpsells_ViewNoUpsellPage() {
        return this.Upsells_ViewNoUpsellPage;
    }

    getUpsells_PopupwithUpsellPage() {
        return this.Upsells_PopupwithUpsellPage;
    }

    getFSMSE_Courage02HMTYPCOrdersPage() {
        return this.FSMSE_Courage02HMTYPCOrdersPage;
    }

    getFSMSE_Courage02HCTYPCOrdersPage() {
        return this.FSMSE_Courage02HCTYPCOrdersPage;
    }
    getFSMSE_CourageCAOrderBillMePage() {
        return this.FSMSE_CourageCAOrderBillMePage;
    }

    getQABoxShopTEMPPage() {
        return this.QABoxShopTEMPPage;
    }

    getFSMSE_CourageCAOrderMasterCCPage() {
        return this.FSMSE_CourageCAOrderMasterCCPage;
    }

    getFSMSE_CourageCAOrderVisaCCPage() {
        return this.FSMSE_CourageCAOrderVisaCCPage;
    }

    getFSMSE_IrelandCAOrderVisaCCPage() {
        return this.FSMSE_IrelandCAOrderVisaCCPage;
    }
    getFSMSE_BooklistReaderI1519BulkOrderPage() {
        return this.FSMSE_BooklistReaderI1519BulkOrderPage;
    }
    getFSMSE_CourageCCDeclinedPage() {
        return this.FSMSE_CourageCCDeclinedPage;
    }

    getFSMSE_DonationOneTimePage() {
        return this.FSMSE_DonationOneTimePage;
    }

    getFSMPE_RenewalAccountPage() {
        return this.FSMPE_RenewalAccountPage;
    }

    getFSMPE_PayBill() {
        return this.FSMPE_PayBill;
    }

    getFSMSE_DonationRecurringPage() {
        return this.FSMSE_DonationRecurringPage;
    }
    getFSMSE_HoffmanCANDigitalNoUpsellPage() {
        return this.FSMSE_HoffmanCANDigitalNoUpsellPage;
    }


    getFSMSE_HoffmanCANDigitalUpsellPage() {

        return this.FSMSE_HoffmanCANDigitalUpsellPage;
    }

    getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage() {
        return this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage;
    }


    getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage() {
        return this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage;
    }

    getFSMSE_HoffmanCreditonCreditBillMeLaterPage() {
        return this.FSMSE_HoffmanCreditonCreditBillMeLaterPage;
    }

    getFSMSE_HoffmanCreditonBadCreditCardPage() {
        return this.FSMSE_HoffmanCreditonBadCreditCardPage;
    }

    getMySite_BakeFromScratchPage() {
        return this.MySite_BakeFromScratchPage;
    }

    getCouragePayBillOrdersPage() {
        return this.CouragePayBillOrdersPage;
    }

    getMySite_MotortrendPage() {
        return this.MySite_MotortrendPage;
    }


    getMySite_CottageLifePage() {
        return this.MySite_CottageLifePage;
    }

    getFSMSE_NewparamsinurlUSallfieldsPage() {
        return this.FSMSE_NewparamsinurlUSallfieldsPage;
    }
    getFSMSE_ZoomerMagazineMYSignInPage() {
        return this.FSMSE_ZoomerMagazineMYSignInPage;
    }


    getHoffman_CANDigitalNoUpsellPage() {
        return this.Hoffman_CANDigitalNoUpsellPage;
    }

    getHoffman_CANDigitalWithUpsellPage() {
        return this.Hoffman_CANDigitalWithUpsellPage;
    }

    getHoffman_CANPrintNoUpsellPage() {
        return this.Hoffman_CANPrintNoUpsellPage;
    }


   getHoffman_CANPrintDigitalNoUpsellPage() {
        return this.Hoffman_CANPrintDigitalNoUpsellPage;
    }

    getHoffman_CANPrintDigitalWithUpsellPage() {
        return this.Hoffman_CANPrintDigitalWithUpsellPage;
    }

    getHoffman_CreditonBadCreditCardPage() {
        return this.Hoffman_CreditonBadCreditCardPage;
    }

    getHoffman_CreditonCreditBillMeLaterPage() {
        return this.Hoffman_CreditonCreditBillMeLaterPage;
    }

    getHoffman_INTDigitalWithNoUpsellPage() {
        return this.Hoffman_INTDigitalWithNoUpsellPage;
    }
    getHoffman_INTDigitalWithUpsellPage() {
        return this.Hoffman_INTDigitalWithUpsellPage;
    }
    getHoffman_INTPrintWithNoUpsellPage() {
        return this.Hoffman_INTPrintWithNoUpsellPage;
    }

    getHoffman_INTPrintDigitalWithNoUpsellPage() {
        return this.Hoffman_INTPrintDigitalWithNoUpsellPage;
    }

    getHoffman_USPrint_DigitalWithNoUpsellPage() {
        return this.Hoffman_USPrint_DigitalWithNoUpsellPage;
    }

    getHoffman_USPrintNegativeTestPage() {
        return this.Hoffman_USPrintNegativeTestPage;
    }

    getCourageCAOrderWithDBTaxPage() {
        return this.CourageCAOrderWithDBTaxPage;
    }
    
    getCouragePayBillPaymentsPage() {
        return this.CouragePayBillPaymentsPage;
    }

    getHoffman_INTPrintDigitalWithUpsellPage() {
        return this.Hoffman_INTPrintDigitalWithUpsellPage;
    }

     getHoffman_USDigitalWithNoUpsellPage() {
        return this.Hoffman_USDigitalWithNoUpsellPage;
    }

    getHoffman_USDigitalWithUpsellPage() {
        return this.Hoffman_USDigitalWithUpsellPage;
    }

    getHoffman_USPrintWithNoUpsellPage() {
        return this.Hoffman_USPrintWithNoUpsellPage;
    }

    // getCoupon_OrderPage() {
    //     return this.Coupon_OrderPage;
    // }

   getDirectDebitPage() {
        return this.DirectDebitPage;
    }

   getEB_GolfPage() {
        return this.EB_GolfPage;
    }

 getCyberSourcePage() {
        return this.CyberSourcePage;
    }


}