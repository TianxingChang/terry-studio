const CyberLamp = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 justify-center h-full p-6">
      <p className="font-bold my-2">The Design Report</p>
      <div className="border-2 p-1 bg-slate-600 rounded-lg">
        <iframe
          src="/lampfi/lampfi_report.pdf#toolbar=0"
          width="500px"
          height="685px"
          title="Embedded PDF Viewer"
        />
      </div>

      <div className="flex gap-2"></div>
      {/* Ensure that this paragraph is not causing a second rendering */}
    </div>
  );
};

export default CyberLamp;
