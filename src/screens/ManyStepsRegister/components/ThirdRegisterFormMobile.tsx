import { FC, useEffect, useState } from 'react';
import { APPROVE_METHODS } from '..';
import ApproveBuyModal from '../../../components/ApproveBuyModal';
import BuyModal from '../../../components/BuyModal';
import { generateId } from '../../../utils';
import { IPlanState } from '../../Plans';
import PlanItem from '../../Plans/components/PlanItem';
import { IPlan } from '../../Plans/PlansLayout';

interface IProps {
  plansData: IPlan[];
  handleSubmit: any;
  onSubmit: (data: any) => void;
  switchApproveMethod: (
    value: APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM | APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES,
  ) => void;
  approveMethod:
    | APPROVE_METHODS.WALLET_ADDRESS_PAID_FROM
    | APPROVE_METHODS.DIFFERENT_WALLET_ADDRESSES;
  register: any;
  errors: any;
  userId: string;
}

const ThirdRegisterFormMobile: FC<IProps> = ({
  plansData,
  handleSubmit,
  onSubmit,
  switchApproveMethod,
  approveMethod,
  register,
  errors,
  userId,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<IPlanState>(null);
  const [isBuyModalOpened, setIsBuyModalOpened] = useState(false);
  const [isBuyApproveModalOpened, setIsBuyApproveModalOpened] = useState(false);

  const changeBuyModalOpenedStatus = (isOpened: boolean) => {
    window.scrollTo(0, 50);
    setIsBuyModalOpened(isOpened);
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        changeBuyModalOpenedStatus(false);
      }
    });

    return () => {
      // onCancelClick();
      changeBuyModalOpenedStatus(false);
      window.removeEventListener('keydown', () => {}, true);
    };
  }, []);

  const onDoneBtnClick = () => {
    setIsBuyModalOpened(false);
    setIsBuyApproveModalOpened(true);
  };
  const onCloseModalsClick = () => {
    changeBuyModalOpenedStatus(false);
    setIsBuyApproveModalOpened(false);
  };

  useEffect(() => {
    const buyModal = document.querySelector('.buyModal-container-mobile');
    if(buyModal) {
      buyModal.scrollIntoView();
    }
    const approvalModal = document.querySelector('.approval-done-img');
    if(approvalModal) {
      approvalModal.scrollIntoView();
    }
  }, [isBuyApproveModalOpened, isBuyModalOpened])

  return (
    <>
      { isBuyModalOpened || isBuyApproveModalOpened ? (
        <div
          className="overflow"
          style={{
            position: "absolute",
            height: document.body.clientHeight,
            width: '100vw',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 12
          }}
        />
      ) : ('')}
      {isBuyApproveModalOpened && (
        <ApproveBuyModal
          approveMethod={approveMethod}
          switchApproveMethod={switchApproveMethod}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          onCloseModalsClick={onCloseModalsClick}
        />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="third-register-form-container-mobile">
        {isBuyModalOpened && selectedPlan && (
          <BuyModal
            changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
            selectedPlan={selectedPlan}
          >
            <button onClick={onDoneBtnClick} className="third-register-payment-done" type="button">
              Payment done
            </button>
          </BuyModal>
        )}
        <div
          className="plans-list"
          style={{
            width: '70vw',
            marginTop: 50,
            flexDirection: 'column',
          }}
        >
          {plansData.map(({ title, description, options, price }, i) => (
            <PlanItem
              isRegisterForm
              key={generateId()}
              title={title}
              description={description}
              options={options}
              price={price}
              changeBuyModalOpenedStatus={changeBuyModalOpenedStatus}
              setSelectedPlan={setSelectedPlan}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default ThirdRegisterFormMobile;
