import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import ReactLoading from 'react-loading';

interface Props {
  /** このダイアログを表示するなら true */
  isOpen: boolean;
  /** このダイアログを閉じるときのコールバック */
  onClose?: () => void;
  /** 処理が完了したかのフラグ */
  hasProcessed?: boolean;
  /** ローディング中のメッセージ */
  loadingMessage: string;
  /** ローディング完了時のメッセージ */
  loadedMessage?: string;
}

const LoadingDialog = ({
  isOpen,
  onClose,
  hasProcessed,
  loadingMessage,
  loadedMessage = '',
}: Props): JSX.Element => {
  // ダイアログに表示するメッセージを保持するためのステート
  const [dialogMessage, setDialogMessage] = useState<string>(loadingMessage);

  // 具体的に #root 要素などを指定したほうがよい？
  ReactModal.setAppElement('body');

  // ダイアログが開いたときに呼び出される
  const handleOpen = () => {
    // ここで設定情報などを読み込む
  };

  // ダイアログ領域外のクリックや、ESC キーを押したときに呼び出される
  const handleClose = () => {
    // 親コンポーネントにダイアログを閉じてもらうためのコールバック通知
    onClose?.();
  };

  useEffect(() => {
    // 画像アップロード状態ごとによるメッセージ
    hasProcessed
      ? setDialogMessage(loadedMessage)
      : setDialogMessage(loadingMessage);
  }, [hasProcessed, loadingMessage, loadedMessage]);

  // スタイルのカスタマイズ
  const customStyles: ReactModal.Styles = {
    // ダイアログ内のスタイル（中央に表示）
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    // 親ウィンドウのスタイル（ちょっと暗くする）
    overlay: {
      background: 'rgba(0,0,0,0.2)',
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={handleOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Settings">
      {hasProcessed ? null : (
        <ReactLoading type="spin" color="#0000ff" height={32} width={32} />
      )}
      {dialogMessage}
    </ReactModal>
  );
};

export default LoadingDialog;
