<template>
  <!-- ที่อยู่ -->
  <div class="container col-xxl-8 px-4 py-5 ">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="../assets/hero_3.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="900" height="1000" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">ติดต่อเรา Organic Farm</h1>
        <p class="lead">
ที่อยู่:
หมู่ 5 ตำบลทุ่งหลวง
อำเภอแม่ริม จังหวัดเชียงใหม่ 50180
ประเทศไทย<br><br>

เบอร์โทรติดต่อ:
089-123-4567 
(สามารถโทรสอบถามข้อมูลเกี่ยวกับผลิตภัณฑ์หรือการเยี่ยมชมฟาร์มได้)<br><br>

อีเมล:
info@organicframforyou.com 
(สำหรับการติดต่อสอบถามรายละเอียดเพิ่มเติมหรือการสั่งซื้อผลิตภัณฑ์ออนไลน์)<br><br>

เว็บไซต์:
www.organicframforyou.com 
(หากต้องการสั่งซื้อออนไลน์หรือเรียนรู้เพิ่มเติมเกี่ยวกับการทำฟาร์มอินทรีย์)<br><br>

เวลาทำการ:
จันทร์ - เสาร์: 08:00 น. - 17:00 น.
อาทิตย์: ปิดทำการ </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  <!-- ที่อยู่ -->


 <!-- form -->
<form class="was-validated" action="/submit-form" method="post">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">สามารถสอบถามข้อมูลได้ที่นี้</label>
    <textarea class="form-control" id="validationTextarea" placeholder="เพิ่มข้อความ" required></textarea>
    <div class="invalid-feedback">
      เพิ่มข้อความ
    </div>
  </div>

  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
    <label class="form-check-label" for="validationFormCheck1">คำถามที่พบบ่อย</label>
    <div class="invalid-feedback"></div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck2">เวลาเปิด-ปิด</label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
    <label class="form-check-label" for="validationFormCheck3">ส่วนลดต่างๆ</label>
    <div class="invalid-feedback"></div>
  </div>

  <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">Open menu</option>
      <option value="1">กิจกรรมต่าง</option>
      <option value="2">แผนที่ภายในฟาร์ม</option>
      <option value="3">พันธ์ุไม้ในฟาร์ม</option>
    </select>
    <div class="invalid-feedback">กรุณาเลือกตัวเลือก</div>
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required>
    <div class="invalid-feedback">กรุณาแนบไฟล์</div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary" type="submit">ส่งข้อมูล</button>
  </div>
</form>
<!-- form -->
</div>
<!-- iframe แผนที่ Google -->

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.925859739647!2d100.99016807572784!3d13.416916204957454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d3617ee04db97%3A0x2250cf181ed25837!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lio4Lij4Li14Lib4LiX4Li44LihIOC4p-C4tOC4l-C4ouC4suC5gOC4guC4leC4iuC4peC4muC4uOC4o-C4tQ!5e0!3m2!1sth!2sth!4v1732083890663!5m2!1sth!2sth" width="3000" height="650" style="border:0;" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>


